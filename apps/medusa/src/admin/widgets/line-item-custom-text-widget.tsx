import { defineWidgetConfig } from '@medusajs/admin-sdk';
import { Container, Heading, Text } from '@medusajs/ui';
import type { DetailWidgetProps, AdminOrder } from '@medusajs/types';

const OrderLineItemCustomText = ({ data: order }: DetailWidgetProps<AdminOrder>) => {
  const customItems = order?.items.filter((item) => item.metadata?.custom_text);

  return !customItems ? (
    <></>
  ) : (
    <Container className="space-y-6">
      <Heading level="h2">Order Customization</Heading>
      {customItems.map((item, idx) => (
        <Container key={item.id}>
          <Text size="base" weight="regular">
            {idx + 1}. {item.product_title} Text
          </Text>
          <Text family="mono" size="small">
            {String(item.metadata?.custom_text)}
          </Text>
          <Text size="small">Quantity: {item.quantity}</Text>
        </Container>
      ))}
    </Container>
  );
};

export const config = defineWidgetConfig({
  zone: 'order.details.side.after',
});

export default OrderLineItemCustomText;
