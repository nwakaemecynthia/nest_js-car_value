import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { UserDto } from "../users/dto/users.dto";
   

export class SerializeInterceptor implements NestInterceptor {

    intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map(data => {
                return plainToClass(UserDto, data, {
                    excludeExtraneousValues: true //This ensures exluded information are not sent out
                })
            })
        );
    }
}