<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->enum('service', ['watersports', 'diving', 'excursions', 'equipment']);
            $table->string('destination')->nullable();
            $table->string('dates')->nullable();
            $table->integer('participants')->nullable();
            $table->text('message')->nullable();
            $table->enum('status', ['new', 'in_progress', 'completed', 'cancelled'])->default('new');
            $table->text('admin_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
