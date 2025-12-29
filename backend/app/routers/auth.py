from fastapi import APIRouter

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login")
def login() -> dict:
    return {"message": "Login endpoint placeholder"}


@router.post("/otp")
def request_otp() -> dict:
    return {"message": "OTP request placeholder"}
