// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width  = width
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

export function Position(x=0, y=0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(size) {
    this.size.height = Math.max(1, Math.min(size.height, this.screenSize.height - this.position.y))
    this.size.width = Math.max(1, Math.min(size.width, this.screenSize.width - this.position.x))
  }


  move(position) {
    this.position.x = Math.max(0, Math.min(position.x, this.screenSize.width - this.size.width))
    this.position.y = Math.max(0, Math.min(position.y, this.screenSize.height - this.size.height))
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
} 

