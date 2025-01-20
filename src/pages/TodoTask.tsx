import { Button } from '@/components/ui/button';
import planService from '@/services/plan.service';
import React, { useEffect, useState } from 'react'

interface Plan {
  name : string;
}

function TodoTask() {
  const [plans , setPlans] = useState<Array<Plan>>([]);
  const [isLoading , setIsLoading] = useState<boolean>(false);

  const getPlans = async () => {
    setIsLoading(true);
    try {
      const response = await planService.getPlans();
    } catch (error) {
      
    }
  }
  useEffect(() => {} , [])

  return (
    <div>
      <h1>Todo </h1>
      <Button
      variant="success"
      >This is the button</Button>
    </div>
  )
}

export default TodoTask