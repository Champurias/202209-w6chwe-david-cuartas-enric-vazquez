# Data Layer

## Data

- Robots

  - robot
    - name
    - imageUrl
    - stats {
      - speed: number
      - endurance: number
      - createdAt: number - timestamp - ("día" de "mes" de "año" a las "hora")
        }
  - robots lista de robot

- UI
  - isLoading
  - isMessage

## Data Modifications

- Set isLoading to true
- Set isLoading to false
- Set isMessage to true
- Set isMessage to false

# Components

## App

### Show Data

- MainHeader component
- When on route:
  - /
    - A RobotList component
  - /robots/:id
    - A RobotDetails component with the provided id
  - /robots/create
    - A Form component with for create
  - /robots/modify/:id
    - A Form component with for modify the received id

## MainHeader

### Show Data

- A heading level 1 with "RoboDev"
- A MainNavigation components

## MainNavigation

### Show Data

- Home link

### Get Actions

- Go to home on click Home link

## RobotList

### Show Data

- List of RobotCard components providing id, name and imageUrl

## RobotCard

### Show Data

- A heading level 2 with the received name.
- An image with the received imageUrl.
- modify Button component provided with "Modify" and modifyRobot callback
- delete Button component provided with "Delete" and deleteRobot callback

### Get Actions

- Go to robot details page when click on name or image.

## RobotDetails

### Show Data

- A heading level 2 with the received name.
- An image with the received imageUrl.
- A list with the received stats:
  - Speed
  - Endurance
  - Created at
- modify Button component provided with "Modify" and modifyRobot callback
- delete Button component provided with "Delete" and deleteRobot callback

### Form

### Show Data

### Get Actions

## Button

### Show Data

- Show a button with the received text

### Get Actions

- Call the received callback
