class Api::StepsController < ApplicationController
  def create
    @step = Todo.find(params[:todo_id]).steps.new(step_params)

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy
    render json: step[:id]
  end

  def index
    render json: Todo.find(params[:todo_id]).steps
  end

  def update
    @step = Step.find(params[:id])

    if @step.update(step_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

    private

    def step_params
      params.require(:step).permit(:title, :done, :todo_id)
    end
end
