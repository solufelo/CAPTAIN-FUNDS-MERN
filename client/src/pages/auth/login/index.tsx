import { Button, Form, Input } from 'antd'    
      
import WelcomeContent from '../common/welcome-content'
import { Link } from 'react-router-dom';

interface LoginForm {
  email: string
  password: string
}
function LoginPage() {

  const onSubmit = (values: LoginForm) => {
    console.log(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo.errorFields || [])
  } 
  return (
<div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="welcome-content bg-primary min-h-screen md:flex items-center justify-center hidden">
              <WelcomeContent />
            </div>
            <div className="form-content bg-gray-100 flex items-center justify-center">
              <Form className="flex flex-col gap-3 w-96" layout="vertical"
              onFinish={onSubmit}
              onFinishFailed={onFinishFailed}>
                <h1 className="text-2xl font-bold text-primary">
                  Login to your account</h1>
                <hr className="" />
               
                <Form.Item 
                name="email" 
                label="Email" 
                rules={[{ required: true, message: "Please enter your email" }]}>
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item 
                name="password" 
                label="Password" 
                rules={[{ required: true, message: "Please enter your password" }]}>
                  <Input placeholder="Enter your password" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Login</Button>      
                <span className="text-sm text-gray-500">Don't have an account? <Link to="/register">Register</Link></span>  
              </Form> 
            </div>  
    </div>  );
}

export default LoginPage