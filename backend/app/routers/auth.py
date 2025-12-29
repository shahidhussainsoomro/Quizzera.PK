from fastapi import APIRouter

from app.schemas.auth import (
    AuthResponse,
    ForgotPasswordRequest,
    LoginRequest,
    SignUpRequest,
)
from app.services.email import send_email

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup", response_model=AuthResponse)
def signup(payload: SignUpRequest) -> AuthResponse:
    send_email(
        subject="Welcome to Quizzera",
        recipients=[payload.email],
        body="Thanks for signing up. Your account is ready.",
    )
    return AuthResponse(message="Signup successful")


@router.post("/login", response_model=AuthResponse)
def login(payload: LoginRequest) -> AuthResponse:
    return AuthResponse(
        message="Login successful", access_token="demo-token", token_type="bearer"
    )


@router.post("/logout", response_model=AuthResponse)
def logout() -> AuthResponse:
    return AuthResponse(message="Logged out")


@router.post("/forgot-password", response_model=AuthResponse)
def forgot_password(payload: ForgotPasswordRequest) -> AuthResponse:
    send_email(
        subject="Reset your Quizzera password",
        recipients=[payload.email],
        body="Use the reset link to update your password.",
    )
    return AuthResponse(message="Password reset email sent")
