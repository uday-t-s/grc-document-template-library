# Security Test Report

## Test 1 — Unauthorized API Access

Endpoint:
- /api/user

Result:
- 401 Unauthorized returned without token

Status:
- Passed


## Test 2 — Invalid JWT Token

Result:
- Invalid token blocked

Status:
- Passed


## Test 3 — Injection Attempt

Test Input:
' OR '1'='1

Result:
- Request rejected

Status:
- Passed


## Security Findings Fixed

- JWT validation added
- Spring Security configured
- BCrypt password hashing enabled
- Protected APIs implemented
- Frontend/backend security issues fixed