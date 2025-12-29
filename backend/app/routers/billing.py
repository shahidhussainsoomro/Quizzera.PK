from fastapi import APIRouter

router = APIRouter(prefix="/billing", tags=["billing"])


@router.get("/pricing")
def pricing() -> dict:
    return {"message": "Pricing plans placeholder"}


@router.post("/subscriptions")
def create_subscription() -> dict:
    return {"message": "Subscription creation placeholder"}


@router.get("/invoices")
def list_invoices() -> dict:
    return {"message": "Invoice list placeholder"}
