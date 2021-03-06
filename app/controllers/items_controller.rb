class ItemsController < ApplicationController
  before_action :ensure_logged_in

  def index
    @items = current_user.items
  end

  def show
    @item = current_user.items.find(params[:id])
  end

  def new
    @item = Item.new
    @kinds = ['fish-a', 'fish-b', 'fish-c', 'fish-d', 'fish-e', 'fish-f']
  end

  def create
    @item = Item.new(create_params)
    @item.user = current_user

    if @item.save
      flash[:notice] = 'You added a new fish!'
      redirect_to item_path(@item)
    else
      flash[:error] = @item.errors.full_messages.join(', ')
      render :new
    end
  end

  def destroy
    item = current_user.items.find(params[:id])
    item.destroy!
    flash[:notice] = "#{item.name} was removed!"
    redirect_to items_path
  end

  private

  def create_params
    params.require(:item).permit(:name, :kind)
  end

  def update_params
    params.require(:item).permit(:name)
  end
end
