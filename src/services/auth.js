import { userService } from "./user.service";
import CONFIG from "../config";

const JWT = require("jsonwebtoken");


export const HTTP_STATUS = {
    OK: 200,
    UNAUTHORIZED: 401
}

export default {

    buildResponse(status, body) {
        return {
            status: status,
            data: body
        }
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
            // username or password is incorrect
            return this.buildResponse(HTTP_STATUS.UNAUTHORIZED);
        }
        // Request user has found
        let payload = {
            email: user.name,
            code:  user.code
        }
        return this.buildResponse( HTTP_STATUS.OK, {
            user: payload,
            jwt_token: JWT.sign(payload, CONFIG.SECRET_KEY, { expiresIn: CONFIG.TWO_MINUTES })
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
            return JWT.verify(jwt_token, CONFIG.SECRET_KEY);
        } catch (err) {
            return false;
        }
    }

}

