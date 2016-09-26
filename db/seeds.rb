Todo.destroy_all

t1 = Todo.create!(title: "Buy Milk", body: "Gotta buy that milk.", done: false)
t2 = Todo.create!(title: "Walk Dog", body: "Be sure to bring the leash", done: false)
t3 = Todo.create!(title: "Play Chess", body: "Feeling really smart", done: true)
t4 = Todo.create!(title: "Learn Redux", body: "Dat State Tho", done: true)
