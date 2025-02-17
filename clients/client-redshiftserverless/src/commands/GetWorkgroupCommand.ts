// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetWorkgroupRequest, GetWorkgroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetWorkgroupCommand,
  serializeAws_json1_1GetWorkgroupCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface GetWorkgroupCommandInput extends GetWorkgroupRequest {}
export interface GetWorkgroupCommandOutput extends GetWorkgroupResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetWorkgroupCommand } from "@aws-sdk/client-redshiftserverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetWorkgroupCommand } = require("@aws-sdk/client-redshiftserverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new GetWorkgroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkgroupCommandInput} for command's `input` shape.
 * @see {@link GetWorkgroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class GetWorkgroupCommand extends $Command<
  GetWorkgroupCommandInput,
  GetWorkgroupCommandOutput,
  RedshiftServerlessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetWorkgroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkgroupCommandInput, GetWorkgroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetWorkgroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWorkgroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetWorkgroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetWorkgroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetWorkgroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkgroupCommandOutput> {
    return deserializeAws_json1_1GetWorkgroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
