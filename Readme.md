# Maladive Watersports Website

A comprehensive Laravel-based website for Maladive Watersports, featuring a modern frontend design and a powerful admin backend for content management.

## Features

### Frontend
- **Responsive Design**: Modern, mobile-friendly interface using Tailwind CSS
- **Home Page**: Hero section, services overview, and partner brands
- **Services Pages**: Detailed information about watersports, diving, and excursions
- **Partner Resorts**: Showcase of resort partnerships worldwide
- **Shop**: Equipment and merchandise catalog
- **Contact & Enquiry Forms**: Customer interaction and lead generation
- **About Us**: Company information and team details

### Backend Admin Panel
- **Dashboard**: Overview of key metrics and recent activity
- **Enquiry Management**: View, update status, and manage customer enquiries
- **Contact Management**: Handle contact form submissions
- **Partner Resort Management**: Add, edit, and manage resort partnerships
- **Shop Management**: Manage product categories and inventory
- **Content Management**: Edit website content and settings
- **Export Functionality**: Export data to CSV format

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd maladive-laravel
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Database setup**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

6. **Build frontend assets**
   ```bash
   npm run build
   ```

7. **Start the development server**
   ```bash
   php artisan serve
   ```

## Admin Access

- **URL**: `/admin`
- **Email**: `admin@maladive.com`
- **Password**: `password`

## Database Structure

### Core Tables
- `users` - Admin user accounts
- `enquiries` - Customer enquiry submissions
- `contacts` - Contact form submissions
- `partner_resorts` - Resort partnership information
- `shop_categories` - Product categories
- `shop_products` - Product inventory
- `newsletter_subscribers` - Email subscription list

### Key Features
- **Enquiry Management**: Track customer requests with status updates
- **Resort Partnerships**: Manage resort information and activities
- **Shop Inventory**: Complete e-commerce functionality
- **Content Management**: Easy content updates through admin panel

## Admin Panel Usage

### Dashboard
- View key metrics (total enquiries, contacts, resorts, products)
- Monitor recent activity
- Quick access to common actions

### Enquiry Management
- View all customer enquiries
- Update enquiry status (new, in progress, completed, cancelled)
- Add admin notes
- Export enquiries to CSV

### Partner Resort Management
- Add new resort partnerships
- Edit resort details, amenities, and activities
- Manage resort status (active, inactive, pending)
- Upload resort images

### Shop Management
- **Categories**: Organize products by type
- **Products**: Manage inventory, pricing, and specifications
- **Stock Control**: Track product availability
- **Featured Products**: Highlight special items

### Content Management
- Update website content
- Manage partner brands
- Edit service descriptions
- Update company information

## API Endpoints

### Public Routes
- `GET /` - Home page
- `GET /services` - Services overview
- `GET /watersports` - Watersports details
- `GET /diving` - Diving services
- `GET /excursions` - Excursion information
- `GET /partner-resorts` - Resort partnerships
- `GET /shop` - Product catalog
- `GET /about` - Company information
- `GET /contact` - Contact page
- `GET /enquiry` - Enquiry form

### Admin Routes
- `GET /admin` - Admin dashboard
- `GET /admin/enquiries` - Enquiry management
- `GET /admin/contacts` - Contact management
- `GET /admin/partner-resorts` - Resort management
- `GET /admin/shop-categories` - Category management
- `GET /admin/shop-products` - Product management
- `GET /admin/settings` - System settings

## File Structure

```
maladive-laravel/
├── app/
│   ├── Http/Controllers/
│   │   ├── Admin/           # Admin panel controllers
│   │   ├── Auth/            # Authentication controllers
│   │   └── ...              # Frontend controllers
│   ├── Models/              # Eloquent models
│   └── ...
├── database/
│   ├── migrations/          # Database structure
│   └── seeders/            # Sample data
├── resources/
│   ├── views/
│   │   ├── admin/          # Admin panel views
│   │   ├── auth/           # Authentication views
│   │   ├── layouts/        # Page layouts
│   │   └── ...             # Frontend views
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript
├── routes/
│   ├── web.php             # Main routes
│   └── admin.php           # Admin routes
└── ...
```

## Customization

### Adding New Services
1. Create new route in `routes/web.php`
2. Add controller method
3. Create view file
4. Update navigation

### Adding New Admin Features
1. Create controller in `app/Http/Controllers/Admin/`
2. Add route in `routes/admin.php`
3. Create view files in `resources/views/admin/`
4. Update admin navigation

### Styling Changes
- Modify `resources/css/app.css` for custom styles
- Update `tailwind.config.js` for theme customization
- Use Tailwind CSS classes for rapid styling

## Security Features

- **Authentication**: Secure admin login system
- **CSRF Protection**: Built-in Laravel security
- **Input Validation**: Comprehensive form validation
- **SQL Injection Protection**: Eloquent ORM security
- **XSS Protection**: Blade template escaping

## Performance Optimization

- **Database Indexing**: Optimized table structures
- **Asset Compilation**: Minified CSS and JavaScript
- **Caching**: Laravel caching system
- **Image Optimization**: Responsive image handling

## Deployment

### Production Requirements
- PHP 8.1+
- MySQL/PostgreSQL
- Composer
- Node.js & NPM
- Web server (Apache/Nginx)

### Deployment Steps
1. Set production environment variables
2. Run `composer install --optimize-autoloader --no-dev`
3. Run `npm run build`
4. Set proper file permissions
5. Configure web server
6. Set up SSL certificate

## Support & Maintenance

### Regular Tasks
- Monitor enquiry submissions
- Update resort information
- Manage shop inventory
- Review and respond to contacts
- Backup database regularly

### Updates
- Keep Laravel and dependencies updated
- Monitor security advisories
- Regular database maintenance
- Performance monitoring

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License

This project is proprietary software for Maladive Watersports.

## Contact

For technical support or questions:
- Email: admin@maladive.com
- Website: https://maladive.com

---

**Note**: This is a production-ready system with comprehensive admin functionality. Always backup your database before making significant changes.
