

CREATE TABLE orderProducts (
    id SERIAL PRIMARY KEY,
    quantity INTEGER ,
    order_id SERIAL  REFERENCES orders(id),
    product_id SERIAL REFERENCES products(id));