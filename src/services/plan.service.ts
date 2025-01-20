import axios from 'axios';
import config from '@/conf/config';

class PlanService {

    private BACKEND_URL: string;

    constructor() {
        this.BACKEND_URL = config.BACKEND_URL;
    }

    public getPlans = async () => {
        try {
            const response = await axios.get(`${this.BACKEND_URL}/plan`);
            console.log(response);
            return response.data;
        } 
        catch (error) {
            console.error("Error while fetching the plans", error);
        }
    }

    public createPlan = async (data: any) => {
        try {
            const response = await axios.post(`${this.BACKEND_URL}/plan`, data);
            return response.data;
        } 
        catch (error) {
            console.error("Error while creating the plan", error);
        }
    }
}

export default new PlanService();
