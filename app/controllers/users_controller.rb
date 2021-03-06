class UsersController < ApplicationController
  def index
    @user_count = User.count
  end

  def new
    @user = User.new
  end

  def show
    
  end

  def create
    user = User.new(create_params)

    if user.save
      sign_in(user)
      flash[:notice] = 'Created Account!'
      redirect_to users_path
    else
      errors = user.errors.full_messages
      flash[:error] = 'Form Incorrect'
      @user = User.new(username: create_params[:username])
      render :new
    end
  end

  private

  def create_params
    params.require(:user).permit(:username, :password)
  end
end
