type QuoteItem = {
  name: string;
  sku: string;
  quantity: number;
  price: number;
};

type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  items: QuoteItem[];
};

export async function sendQuoteToTelegram(payload: QuotePayload): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set — skipping Telegram notification");
    return false;
  }

  const lines = payload.items.map(
    (i) => `• ${i.name} (SKU: ${i.sku}) × ${i.quantity} — $${(i.price * i.quantity).toFixed(2)}`,
  );
  const total = payload.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const text = [
    "🛒 *New shop quote request*",
    "",
    `*Name:* ${payload.name}`,
    `*Email:* ${payload.email}`,
    `*Phone:* ${payload.phone}`,
    payload.company ? `*Company:* ${payload.company}` : null,
    "",
    "*Items:*",
    ...lines,
    "",
    `*Estimated total:* $${total.toFixed(2)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", err);
    return false;
  }

  return true;
}
