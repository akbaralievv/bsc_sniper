


export class ErrorService {


    static processAppError(response: any) {
        if (response.error) {
            alert(response.message)
        }
    }
}