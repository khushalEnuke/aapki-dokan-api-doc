define({ "api": [
  {
    "type": "get",
    "url": "/api/customer/cities",
    "title": "Get Cities List",
    "name": "Cities_List",
    "group": "Area",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"cities\": [\n            {\n                \"_id\": \"5cd01c1839b32d325085052d\",\n                \"name\": \"Gurgaon\",\n                \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                \"__v\": 0\n            },\n            {\n                \"_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                \"name\": \"Gurgaon New\",\n                \"created_at\": \"2019-05-06T12:14:47.699Z\",\n                \"updated_at\": \"2019-05-06T12:14:47.699Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/common.js",
    "groupTitle": "Area"
  },
  {
    "type": "get",
    "url": "/api/customer/areas",
    "title": "Get Area List",
    "name": "Get_Area_List",
    "group": "Area",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>id of the city to get its areas.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"city\": {\n            \"areas\": [\n                {\n                    \"_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"name\": \"sector-14\",\n                    \"created_at\": \"2019-05-06T11:31:14.865Z\",\n                    \"updated_at\": \"2019-05-06T11:31:14.865Z\",\n                    \"__v\": 0\n                },\n                {\n                    \"_id\": \"5cd01b0cf03a5831a00732d9\",\n                    \"name\": \"sector-12\",\n                    \"created_at\": \"2019-05-06T11:31:24.523Z\",\n                    \"updated_at\": \"2019-05-06T11:31:24.523Z\",\n                    \"__v\": 0\n                }\n            ],\n            \"_id\": \"5cd01c1839b32d325085052d\",\n            \"name\": \"Gurgaon\",\n            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Facebook Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Facebook error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"400 - {\\\"error\\\":{\\\"message\\\":\\\"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\\\",\\\"type\\\":\\\"OAuthException\\\",\\\"code\\\":190,\\\"error_subcode\\\":463,\\\"fbtrace_id\\\":\\\"AYxofrM9uxc\\\"}}\",\n    \"error\": {\n        \"error\": {\n            \"message\": \"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\",\n            \"type\": \"OAuthException\",\n            \"code\": 190,\n            \"error_subcode\": 463,\n            \"fbtrace_id\": \"AYxofrM9uxc\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/common.js",
    "groupTitle": "Area"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>user's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/facebook-login",
    "title": "Facebook Login",
    "name": "Facebook_Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>user id obtained from facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>token obtained from facebook.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": 438468363,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com || null\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Facebook Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Facebook error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"400 - {\\\"error\\\":{\\\"message\\\":\\\"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\\\",\\\"type\\\":\\\"OAuthException\\\",\\\"code\\\":190,\\\"error_subcode\\\":463,\\\"fbtrace_id\\\":\\\"AYxofrM9uxc\\\"}}\",\n    \"error\": {\n        \"error\": {\n            \"message\": \"Error validating access token: Session has expired on Thursday, 02-May-19 09:00:00 PDT. The current time is Thursday, 09-May-19 05:47:57 PDT.\",\n            \"type\": \"OAuthException\",\n            \"code\": 190,\n            \"error_subcode\": 463,\n            \"fbtrace_id\": \"AYxofrM9uxc\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/forget-password",
    "title": "Forgot Password",
    "name": "Forgot_Password",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Contact Number is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Contact Number is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Contact number is not registered With Us\",\n    \"error\": {\n        \"validation\": {\n            \"contact_number\": [\n                \"Contact number is not registered With Us\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/google-login",
    "title": "Google Login",
    "name": "Google_Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_token",
            "description": "<p>google token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": 64736438,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Google Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Google error invalid token:",
          "content": "{\n    \"success\": false,\n    \"singleStringMessage\": \"Token used too late, 1557405751.128 > 1556626806: {\\\"iss\\\":\\\"accounts.google.com\\\",\\\"azp\\\":\\\"210682269861-pruagrtf51m3t90cn9eru3lk0hs1gaic.apps.googleusercontent.com\\\",\\\"aud\\\":\\\"210682269861-pruagrtf51m3t90cn9eru3lk0hs1gaic.apps.googleusercontent.com\\\",\\\"sub\\\":\\\"111692623871330382648\\\",\\\"email\\\":\\\"khushalp1996@gmail.com\\\",\\\"email_verified\\\":true,\\\"at_hash\\\":\\\"-ZHn89tIf-KuMnR6nbqFSA\\\",\\\"name\\\":\\\"Khushal Pahuja\\\",\\\"picture\\\":\\\"https://lh5.googleusercontent.com/-p6ZLexYjO5U/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfSeiuC8r2fgg-IBhfkho9fn0kGLQ/s96-c/photo.jpg\\\",\\\"given_name\\\":\\\"Khushal\\\",\\\"family_name\\\":\\\"Pahuja\\\",\\\"locale\\\":\\\"en\\\",\\\"iat\\\":1556622906,\\\"exp\\\":1556626506,\\\"jti\\\":\\\"f3c7b936c63244316f76415b1b0442b626e4087c\\\"}\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/register",
    "title": "User Registration",
    "name": "Register_User",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's email .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>user's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExists",
            "description": "<p>The user already exists.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Email address already exists.\",\n    \"error\": {\n        \"validation\": {\n            \"email\": [\n                \"Email address already exists.\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Password is a required field\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user's email or contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsImlhdCI6MTU1NzQwMTM1NX0.owNAZZXZP9BcannAZb6SmCJdDIn0xwj81WzrtCLhbAE\",\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Username or Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/customer/auth/verify-otp",
    "title": "User Otp Verification",
    "name": "User_Otp_Verification",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_token",
            "description": "<p>verification token send in previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$kDWy7UMqIXmqxMSq6hcgpuiSb4BjDQcB5WcNGTYsNB3ZqI0BNnuqq\",\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsInR5cGUiOjMsImlhdCI6MTU1NzQwMTgxOH0.osWeW6W3X6j74wVYaAwgjbH2vR0rWQyegX0HUw-5O1o\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Verification token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"verification_token\": [\n                \"Verification token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Otp is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Invalid otp. Please try again.\"\n    error: {\n           message: \"Invalid otp. Please try again.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api/customer/category",
    "title": "Get Categories",
    "name": "Get_Categories",
    "group": "Category",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the store to get categories of.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"categories\": [\n            {\n                \"_id\": \"5cd55cec828e75341ca089cb\",\n                \"status\": 1,\n                \"parent\": null,\n                \"name\": \"Dairy Products\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"created_at\": \"2019-05-10T11:13:48.073Z\",\n                \"updated_at\": \"2019-05-10T11:13:48.073Z\",\n                \"__v\": 0,\n                \"subcategories\": [\n                    {\n                        \"_id\": \"5cd55d96828e75341ca089cc\",\n                        \"status\": 1,\n                        \"parent\": \"5cd55cec828e75341ca089cb\",\n                        \"name\": \"Milk\",\n                        \"store_id\": \"5cd1259b63aff817c37afb02\",\n                        \"created_at\": \"2019-05-10T11:16:38.799Z\",\n                        \"updated_at\": \"2019-05-10T11:16:38.799Z\",\n                        \"__v\": 0\n                    },\n                    {\n                        \"_id\": \"5cdac8de1c9d4400003f31b6\",\n                        \"status\": 2,\n                        \"name\": \"cheese\",\n                        \"store_id\": \"5cd1259b63aff817c37afb02\",\n                        \"parent\": \"5cd55cec828e75341ca089cb\"\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Store Id is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Store Id is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"The Store Id is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"store_id\": [\n                \"The Store Id is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/category.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/customer/product",
    "title": "Get Products",
    "name": "Get_Products",
    "group": "Product",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "store_id",
            "description": "<p>Id of the store.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>(optional) Parent catgeory id if all selected.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "subcategory_id",
            "description": "<p>(optional) Sub category of the products require.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>(optional) search keyword by name of product.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"success\": true,\n   \"code\": 200,\n   \"data\": {\n       \"subcategories\": [\n           {\n               \"_id\": \"5cdac8de1c9d4400003f31b6\",\n               \"status\": 2,\n               \"name\": \"cheese\",\n               \"store_id\": \"5cd1259b63aff817c37afb02\",\n               \"parent\": \"5cd55cec828e75341ca089cb\",\n               \"products\": []\n           },\n           {\n               \"_id\": \"5cd55d96828e75341ca089cc\",\n               \"status\": 1,\n               \"parent\": \"5cd55cec828e75341ca089cb\",\n               \"name\": \"Milk\",\n               \"store_id\": \"5cd1259b63aff817c37afb02\",\n               \"created_at\": \"2019-05-10T11:16:38.799Z\",\n               \"updated_at\": \"2019-05-10T11:16:38.799Z\",\n               \"__v\": 0,\n               \"products\": [\n                   {\n                       \"_id\": \"5ce3db99f558770b9cab1170\",\n                       \"is_featured\": true,\n                       \"pictures\": [\n                           \"nfufhuhsdfu\",\n                           \"fihwfuisudfdgsu\"\n                       ],\n                       \"name\": \"amul milk\",\n                       \"store_id\": \"5cd1259b63aff817c37afb02\",\n                       \"category_id\": \"5cd55d96828e75341ca089cc\",\n                       \"size\": \"1 litre\",\n                       \"price\": {\n                           \"cost_price\": 20,\n                           \"sale_price\": 30\n                       },\n                       \"stock_quantity\": 10,\n                       \"created_at\": \"2019-05-21T11:06:01.448Z\",\n                       \"updated_at\": \"2019-05-21T11:06:01.448Z\",\n                       \"__v\": 0\n                   }\n               ]\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Store Id is a required field.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Store Id is a required field:",
          "content": "{\n   \"success\": false,\n   \"code\": {\n       \"code\": 422,\n       \"name\": \"UNPROCESSABLE_ENTITY\",\n       \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n   },\n   \"singleStringMessage\": \"The Store Id is a required field\",\n   \"error\": {\n       \"validation\": {\n           \"store_id\": [\n               \"The Store Id is a required field\"\n           ]\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/customer/store",
    "title": "Get Stores",
    "name": "Get_Stores",
    "group": "Store",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "area_id",
            "description": "<p>ID of area selected by user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"stores\": [\n            {\n                \"address\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"owner\": {\n                    \"full_name\": \"khushal pahuja\",\n                    \"contact_number\": \"9711669906\"\n                },\n                \"picture\": null,\n                \"status\": 3,\n                \"_id\": \"5cd1259b63aff817c37afb02\",\n                \"email\": \"khushal.pahuja@enukesoftware.com\",\n                \"contact_number\": \"9711669906\",\n                \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\",\n                \"name\": \"XYZ store\",\n                \"commission\": 2,\n                \"verification_token\": \"1e8c0eed-6864-4492-977f-7cd49263a8b0\",\n                \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Area Id is a required field\",\n    \"error\": {\n        \"validation\": {\n            \"area_id\": [\n                \"Area Id is a required field\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/store.js",
    "groupTitle": "Store"
  },
  {
    "type": "get",
    "url": "/api/customer/store/:id",
    "title": "Get Store's Home page",
    "name": "Get_Stores_home_page",
    "group": "Store",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>store id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"featured_products\": [\n            {\n                \"price\": {\n                    \"cost_price\": 20,\n                    \"sale_price\": 30\n                },\n                \"is_featured\": true,\n                \"pictures\": [\n                    \"nfufhuhsdfu\",\n                    \"fihwfuisudfdgsu\"\n                ],\n                \"_id\": \"5ce3db99f558770b9cab1170\",\n                \"name\": \"amul milk\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"category_id\": \"5cd55d96828e75341ca089cc\",\n                \"size\": \"1 litre\",\n                \"stock_quantity\": 10,\n                \"created_at\": \"2019-05-21T11:06:01.448Z\",\n                \"updated_at\": \"2019-05-21T11:06:01.448Z\",\n                \"__v\": 0\n            }\n        ],\n        \"best_selling_products\": [],\n        \"categories\": [\n            {\n                \"status\": 1,\n                \"parent\": null,\n                \"_id\": \"5cd55cec828e75341ca089cb\",\n                \"name\": \"Dairy Products\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"created_at\": \"2019-05-10T11:13:48.073Z\",\n                \"updated_at\": \"2019-05-10T11:13:48.073Z\",\n                \"__v\": 0\n            }\n        ],\n        \"store\": {\n            \"address\": {\n                \"house_no\": \"21/3\",\n                \"street\": \"XYZ street\",\n                \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                \"city_id\": \"5cd01c1839b32d325085052d\"\n            },\n            \"owner\": {\n                \"full_name\": \"khushal pahuja\",\n                \"contact_number\": \"9711669906\"\n            },\n            \"picture\": null,\n            \"status\": 3,\n            \"_id\": \"5cd1259b63aff817c37afb02\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\",\n            \"name\": \"XYZ store\",\n            \"commission\": 2,\n            \"verification_token\": \"1e8c0eed-6864-4492-977f-7cd49263a8b0\",\n            \"created_at\": \"2019-05-07T06:28:43.580Z\",\n            \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Id",
            "description": "<p>is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Id is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Id is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"id\": [\n                \"Id is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/customer/store.js",
    "groupTitle": "Store"
  }
] });
