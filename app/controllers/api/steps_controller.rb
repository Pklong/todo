class Api::StepsController < ApplicationController
  def create
  end

  def destroy
  end

  def index
  end

  def update
  end

    private

    def step_params
      params.require(:step).permit(:title, :done, :todo_id)
    end
end
