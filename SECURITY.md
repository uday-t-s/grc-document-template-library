# SECURITY DOCUMENTATION

## Project Name
GRC Document Template Library

---

# 1. Authentication

The application uses JWT (JSON Web Token)
based authentication for secure login sessions.

Users authenticate using email and password.

After successful login:
- Backend generates JWT token
- Token is returned to frontend
- Frontend stores token securely

---

# 2. Password Security

Passwords are encrypted using BCryptPasswordEncoder.

Plain-text passwords are never stored in database.

Security benefits:
- One-way hashing
- Salted encryption
- Protection against password leaks

---

# 3. Authorization

Spring Security is used for securing APIs.

Protected APIs require valid JWT token.

Unauthorized requests are blocked automatically.

---

# 4. JWT Validation

Custom JwtFilter validates:
- token signature
- token expiration
- token integrity

Invalid tokens return:
HTTP 401 Unauthorized

---

# 5. CORS Protection

Cross-Origin Resource Sharing (CORS)
configuration allows frontend and backend
communication securely.

Allowed frontend:
- localhost:5173

---

# 6. Database Security

PostgreSQL database used.

Database credentials configured through:
- application.properties
- environment variables
- Docker configuration

---

# 7. API Protection

Protected endpoints:
- /api/user
- future secured APIs

Public endpoints:
- /api/auth/signup
- /api/auth/login

---

# 8. Dependency Security

Main security libraries:
- Spring Security
- jjwt
- BCrypt
- Flyway

---

# 9. Deployment Security

Docker-based isolated containers used for:
- frontend
- backend
- PostgreSQL

Benefits:
- environment consistency
- isolation
- reproducible builds

---

# 10. Security Best Practices Followed

- Password hashing
- Token authentication
- Protected APIs
- Secure backend validation
- Layered architecture
- Exception handling
- Database migrations with Flyway

---

# 11. Future Improvements

Future planned enhancements:
- Role-based authorization
- Refresh tokens
- HTTPS deployment
- Rate limiting
- Audit logging
- Multi-factor authentication

---

# Prepared By

Java Developer 2 Team