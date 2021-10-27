# API RESTful con NodeJS + Express con Database en memoria


## API Endpoints
| Method | Request | Endpoint | Body Example | Succes Response Example | Error Response Example |
| ------ | ------ | ------ | ------ | ------ | ------ |
| POST | Create User | ```/users``` |  ``` { email:'email@domain.com', fullName:'First LastName' } ``` | ``` id: '23asdsd23413asdf', message: 'RECURSO CREADO' ``` | ```  ``` |
| GET | Get Users | ```/users``` |  ``` ``` | ``` [{ email:'email@domain.com', fullName:'First LastName' }] ``` | ```  ``` |
| PUT | Edit User | ```/users/:id``` |  ``` { email:'email@domain.com', fullName:'First LastName', nota : 5 } ``` | ``` OK: true ``` | ``` { message: 'MIDDLEWARE: NO SE ENCONTRÓ EL ID 23asdsd23413asdf' } ``` |
| PATCH | Edit User | ```/users/:id``` |  ``` { nota : 5 } ``` | ``` OK: true ``` | ``` { message: 'MIDDLEWARE: NO SE ENCONTRÓ EL ID 23asdsd23413asdf' } ``` |
| DELETE | Delete User | ```/users/:id``` |  ``` ``` | ``` OK: true ``` | ``` { message: 'MIDDLEWARE: NO SE ENCONTRÓ EL ID 23asdsd23413asdf' } ``` |