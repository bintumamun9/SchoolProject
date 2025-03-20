import { SchoolProject } from "./schooproject";

export class Project {
  private name: string;
  private description: string;
  private startDate: Date;
  private endDate: Date;
  private status: string;
  private tasks: Task[];
  constructor(name: string, description: string, startDate: Date, endDate: Date) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = "In Progress";
    this.tasks = [];
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  getTasks(): Task[] {
    return this.tasks;
  }
}

export class Task {
  private name: string;
  private description: string;
  private dueDate: Date;
  private status: string;
  constructor(name: string, description: string, dueDate: Date) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.status = "Pending";
  }
  setStatus(status: string) {
    this.status = status;
  }
}

const project = new Project("My Project", "A comprehensive collection of projects and assignments related to your school curriculum", new Date(), new Date());
project.addTask(new Task("Write Code", "Generate a random ts code for me", new Date()));
console.log(project.getTasks());
