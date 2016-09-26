class API::TodosController < ApplicationController
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
  end

  def destroy
    Todo.find(params[:id]).destroy
    render json: {}
  end

  def index
    render json: Todo.all
  end

  def show
    @todo = Todo.find(params[:id])

    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  private

    def todo_params
      params.require(:todo).permit(:title, :body, :done)
    end
end
