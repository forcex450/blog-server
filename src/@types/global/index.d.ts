import { HttpStatus } from "@nestjs/common";

export {};

declare global {
	namespace Blog {
		interface User {
			uid?: string;
			username: string;
			email: string;
			role: number;
		}

		interface Jwt {
			access_token: string;
		}

		interface JwtUser extends User {
			access_token: string;
		}

		interface ReturnType<T> {
			statusCode: HttpStatus;
			message: string;
			data: T;
		}
	}
}
