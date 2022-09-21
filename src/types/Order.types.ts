type order = {
    [x: string]: any;
	id?: string;
	order_name?: string;
	quantity?: number;
	order_status?: string;
	user_id?:string;
};

export default order;