defmodule Timemanager.Api.User do
  use Ecto.Schema
  import Ecto.Changeset
  import EctoCommons.EmailValidator

  schema "users" do
    field :email, :string, null: false
    field :username, :string, null: false
    field :role, :boolean, null: false

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :role])
    |> validate_required([:username, :email, :role])
    |> validate_email(:email)
  end
end
