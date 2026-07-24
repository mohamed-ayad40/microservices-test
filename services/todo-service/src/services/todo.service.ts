import { title } from "process"
import { Todo, TodoDocument } from "../models/todo.model.js"
import { CreateTodoDTO } from "../types/todo.types.js"
import { publishToQueue } from "../config/rabbitmq.js"

// Create a new todo
export const createTodo = async (userId: string, email: string, name: string, todoData: CreateTodoDTO) => {
  try {
    const todo = new Todo({
      ...todoData,
      userId,
    })

    await todo.save()

    const event = {
      todoId: todo._id.toString(),
      userId: todo.userId,
      email: email,      // Passes the email to RabbitMQ
      userName: name,   // Passes the name to RabbitMQ
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      dueDate: todo.dueDate
    };

    await publishToQueue("todo_created", event)

    return todo
  } catch (error) {
    throw error
  }
}