class Step < ActiveRecord::Base
  validates :title, :todo_id, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo
end
