import { SECRET_KEY, TWO_MINUTES } from "../config";
import { userService } from "./user.service";

const JWT = require("jsonwebtoken");


export const HTTP_STATUS = {
    OK: 200,
    UNAUTHORIZED: 401
}

export default {

    buildResponse(status, body) {
        let resp = { status : status };
        if (status !== HTTP_STATUS.OK) {
            resp.message = body;
        } else {
            resp.data = body;
        }
        return resp;
    },
    /**
     * Authenticate the request by email/password
     * 
     * @param {*} request { {email}, {password} }
     * @returns 
     */
    authenticate(request) {
        let user = userService.findByEmail(request.email);
        if (user == null || user.password !== request.pwd) {
            return this.buildResponse(HTTP_STATUS.UNAUTHORIZED, "Wrong username or password!");
        }
        // Request user has found
        let payload = {
            email: user.name,
            code:  user.code
        }
        return this.buildResponse( HTTP_STATUS.OK, {
            user: payload,
            jwt_token: JWT.sign(payload, SECRET_KEY, { expiresIn: TWO_MINUTES })
        });                        
        
    },

    /**
     * Verify request by JWT_Token
     * 
     * @param {*} jwt_token 
     * @returns 
     */
    verify(jwt_token) {
        try {
            return JWT.verify(jwt_token, SECRET_KEY);
        } catch (err) {
            return false;
        }
    }

}

