workflow "Test workflow" {
  on = "push"
  resolves = ["Dependencies"]
}

action "Dependencies" {
  uses = "./actions/action-dependencies"
}
