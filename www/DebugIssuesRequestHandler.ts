  import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
  
  export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
      const assigneeId = event.queryStringParameters?.assignee_id;
      if (!assigneeId) {
          return {
              statusCode: 400,
              body: JSON.stringify({
                  message: 'assignee_id is required.'
              })
          };
      }
      return {
          statusCode: 200,
          body: JSON.stringify({
              assignee_id: assigneeId
          })
      };
  };
