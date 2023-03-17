## MONGODB
Mongoose is a good way to ensure a schema is respected >
This isn't very flexible for the long term but for the scope of this app and the purpose of the project it is ok

> Collection of tasks:
task: {
  task: string
  related_ticket: string
  type_of_work: 'FE' | 'BE' | 'FS'
  created_at: time
  modified_at
  plan: {
    affected_areas: []
    steps: string
    discussed: bool
    time_estimate: string
  }
}

##