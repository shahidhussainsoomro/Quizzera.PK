"""add mcq options and correct option

Revision ID: 2024_09_01_0002
Revises: 2024_09_01_0001
Create Date: 2024-09-01 00:02:00.000000
"""

from alembic import op
import sqlalchemy as sa


revision = "2024_09_01_0002"
down_revision = "2024_09_01_0001"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("mcqs", sa.Column("options", sa.JSON(), nullable=False, server_default="[]"))
    op.add_column(
        "mcqs",
        sa.Column("correct_option", sa.String(length=120), nullable=False, server_default=""),
    )
    op.alter_column("mcqs", "options", server_default=None)
    op.alter_column("mcqs", "correct_option", server_default=None)


def downgrade() -> None:
    op.drop_column("mcqs", "correct_option")
    op.drop_column("mcqs", "options")
