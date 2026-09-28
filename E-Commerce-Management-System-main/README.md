# E-Commerce Management System

A full-stack e-commerce application built with React, Redux Toolkit, and JSON Server. This application provides a complete online shopping experience with user authentication, product management, shopping cart functionality, and infinite scrolling.

## Features

### User Features
- **User Authentication**: Complete login and registration system with localStorage persistence
- **Product Browsing**: View products with infinite scroll pagination (6 products per load)
- **Shopping Cart**: Add, remove, and modify product quantities with real-time updates
- **User Profile Management**: Update personal information, change password, and account deletion
- **Product Details**: Detailed product information pages with cart functionality
- **Protected Routes**: Secure access to user-specific features

### Admin Features
- **Product Management**: Create, update, and delete products with form validation
- **Admin Dashboard**: Administrative controls for comprehensive product management
- **Role-Based Access**: Separate admin and user permissions and interfaces

## Tech Stack

### Frontend
- **React 19.1.0** - Modern UI library with latest features
- **Redux Toolkit** - Efficient state management with RTK
- **React Router DOM v7.6.3** - Client-side routing with protected routes
- **React Hook Form** - Performant form handling with validation
- **Tailwind CSS v4.1.11** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client for API calls
- **React Infinite Scroll Component** - Smooth infinite scrolling functionality
- **React Toast Notifications** - User feedback system
- **Nanoid** - Unique ID generation for entities

### Backend
- **JSON Server v1.0.0-beta.3** - Full fake REST API
- **Node.js** - Runtime environment

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **Lazy Loading** - Code splitting for better performance

## Project Structure

```
ecommerce-management-system/
├── backend/
│   ├── db.json              # Database with users and products
│   ├── package.json         # Backend dependencies
│   └── .gitignore          # Git ignore file
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosconfig.jsx          # Axios configuration
│   │   ├── components/
│   │   │   ├── Nav.jsx                  # Navigation component
│   │   │   └── ProductTemplate.jsx      # Product card component
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── CreateProduct.jsx    # Admin - Create products
│   │   │   │   └── ProductDetail.jsx    # Product details & admin controls
│   │   │   ├── user/
│   │   │   │   └── UserProfile.jsx      # User profile management
│   │   │   ├── Cart.jsx                 # Shopping cart with quantity controls
│   │   │   ├── Login.jsx                # User authentication
│   │   │   ├── PageNotFound.jsx         # 404 error page
│   │   │   ├── Products.jsx             # Product listing with infinite scroll
│   │   │   └── Register.jsx             # User registration
│   │   ├── routes/
│   │   │   ├── Authwrapper.jsx          # Protected route wrapper
│   │   │   ├── Mainroutes.jsx           # Main routing configuration
│   │   │   └── Unauthwrapper.jsx        # Unauthenticated route wrapper
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   ├── productActions.jsx   # Product CRUD operations
│   │   │   │   └── userActions.jsx      # User management actions
│   │   │   ├── reducers/
│   │   │   │   ├── cartSlice.jsx        # Cart state management
│   │   │   │   ├── productSlice.jsx     # Product state management
│   │   │   │   └── userSlice.jsx        # User state management
│   │   │   └── Store.jsx                # Redux store configuration
│   │   ├── utils/
│   │   │   └── useInfiniteProducts.jsx  # Custom hook for infinite scroll
│   │   ├── App.jsx                      # Main application component
│   │   ├── index.css                    # Global styles with Tailwind
│   │   └── main.jsx                     # Application entry point
│   ├── .gitignore                       # Git ignore rules
│   ├── eslint.config.js                 # ESLint configuration
│   ├── index.html                       # HTML template
│   ├── package.json                     # Dependencies & scripts
│   └── vite.config.js                   # Vite configuration
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-management-system
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd backend
   npx json-server db.json --port 3000
   ```

5. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

## Default Credentials

### Admin Account
```
Email: admin@master.com
Password: 00
```

### Test User Account
```
Email: gautam@gautam.com
Password: 00
```

## API Endpoints

### Authentication
- `GET /users?email={email}&password={password}` - User login
- `POST /users` - User registration

### Users
- `GET /users` - Get all users
- `PATCH /users/:id` - Update user profile
- `DELETE /users/:id` - Delete user account

### Products
- `GET /products` - Get all products
- `GET /products?_limit=6&_start={offset}` - Paginated products for infinite scroll
- `POST /products` - Create new product (Admin only)
- `PATCH /products/:id` - Update product (Admin only)
- `DELETE /products/:id` - Delete product (Admin only)

## Key Features Implementation

### 🔐 Authentication System
- JWT-like authentication using localStorage
- Persistent user sessions across browser refreshes
- Protected routes with AuthWrapper and UnauthWrapper components
- Role-based access control (Admin/User)

### 🛒 Shopping Cart
- Add/remove items with quantity management
- Real-time cart updates synchronized with backend
- Persistent cart storage per user
- Quantity increment/decrement with automatic removal at zero

### 📱 Infinite Scroll
- Custom `useInfiniteProducts` hook for performance
- Loads 6 products per batch
- Smooth scrolling with loading states
- Lazy loading of product components

### 🎨 Modern UI/UX
- Lazy loading for better performance
- Clean, modern interface with dark theme
- Interactive product cards

### 🔧 State Management
- Redux Toolkit for global state management
- Separate slices for users, products, and cart
- Async actions with proper error handling
- Optimistic updates for better UX

## Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npx json-server db.json --port 3000    # Start JSON server
```

## Environment Configuration

### Frontend (Vite)
- Development server: `http://localhost:5173`
- API base URL: `http://localhost:3000`

### Backend (JSON Server)
- Server: `http://localhost:3000`
- Database: `backend/db.json`

## Database Schema

### Users
```json
{
  "id": "unique-id",
  "username": "string",
  "email": "string",
  "password": "string",
  "isAdmin": "boolean",
  "cart": [
    {
      "product": "product-object",
      "quantity": "number"
    }
  ]
}
```

### Products
```json
{
  "id": "unique-id",
  "title": "string",
  "price": "number",
  "description": "string",
  "category": "string",
  "image": "url-string"
}
```

## Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Infinite Scroll**: Efficient data loading with pagination
- **Code Splitting**: Reduced initial bundle size
- **Memoization**: Optimized React components
- **Efficient State Updates**: Minimal re-renders with Redux Toolkit

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Real database integration (PostgreSQL/MongoDB)
- [ ] JWT authentication with refresh tokens
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Advanced search and filtering
- [ ] Product reviews and ratings system
- [ ] Order management and tracking
- [ ] Email notifications
- [ ] Image upload functionality
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Real-time notifications
- [ ] Admin analytics dashboard
- [ ] Inventory management
- [ ] Wishlist functionality

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000 and 5173 are available
2. **CORS errors**: Make sure both servers are running
3. **Login issues**: Check default credentials and network requests
4. **Build errors**: Clear node_modules and reinstall dependencies

### Debug Commands
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check server status
curl http://localhost:3000/products
curl http://localhost:3000/users
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Open an issue in the repository
- Check the troubleshooting section
- Review the API documentation

---

**Note**: This is a development version using JSON Server as a mock backend. For production deployment, implement proper backend infrastructure with real database, authentication, and security measures.

## Deployment Considerations

For production deployment:
- Replace JSON Server with proper backend (Node.js/Express, Django, etc.)
- Implement real authentication (JWT, OAuth)
- Add input validation and sanitization
- Set up proper error handling and logging
- Configure environment variables
- Add rate limiting and security headers
- Set up CI/CD pipeline