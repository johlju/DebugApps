workflow "Label new issues" {
  on = "issues"
  resolves = ["not-labeled"]
}

action "not-labeled" {
  uses = "actions/bin/filter@master"
  args = "not label 'enhancement|test|bug'"
}
