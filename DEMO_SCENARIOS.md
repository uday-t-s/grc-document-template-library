 Demo Scenarios

Scenario 1 — User Registration

Steps:
1. Open frontend
2. Go to register page
3. Enter user details
4. Click register

Expected Output:
- User registered successfully

Talking Points:
- BCrypt password encryption
- PostgreSQL integration
- Spring Security integraScenario 2 — User Login + JWT

Steps:
1. Open login page
2. Enter credentials
3. Click login

Expected Output:
- Login successful
- JWT token generated

Talking Points:
- JWT authentication
- Secure login flow
- Token generation


Scenario 3 — Protected API Access

Steps:
1. Login user
2. Access protected endpoint
3. Test invalid token

Expected Output:
- Valid token → success
- Invalid token → unauthorized

Talking Points:
- JwtFilter validation
- Protected APIs
- Spring Security authorization