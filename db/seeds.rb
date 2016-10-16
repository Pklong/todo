Todo.destroy_all

t1 = Todo.create!(title: "Buy Milk", body: "Gotta buy that milk.", done: false)
t2 = Todo.create!(title: "Walk Dog", body: "Be sure to bring the leash", done: false)
t3 = Todo.create!(title: "Play Chess", body: "Feeling really smart", done: true)
t4 = Todo.create!(title: "Learn Redux", body: "Dat State Tho", done: true)

Step.destroy_all

s1 = t1.steps.create!(title: "go to the store", done: true)
s2 = t1.steps.create!(title: "find 2%", done: true)
s3 = t1.steps.create!(title: "pay cashier", done: false)

s4 = t2.steps.create!(title: "open door", done: false)
s5 = t2.steps.create!(title: "grab keys", done: false)
s6 = t2.steps.create!(title: "visit park", done: false)
