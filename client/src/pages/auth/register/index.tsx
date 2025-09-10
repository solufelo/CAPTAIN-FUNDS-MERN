import { Button, Form } from "antd"
import WelcomeContent from "../common/welcome-content.tsx"
import Input from "antd/es/input/Input"
import { Link } from "react-router-dom"

function RegisterPage() {

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
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
                  Register your account</h1>
                <hr className="" />
                <Form.Item 
                name="name" 
                label="Full Name" 
                rules={[{ required: true, message: "Please enter your full name" }]}>
                  <Input placeholder="Enter your full name" />
                </Form.Item>
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
                <Button type="primary" htmlType="submit">Register</Button>
                <span className="text-sm text-gray-500">Already have an account? <Link to="/login">Login</Link></span>
              </Form>
            </div>
    </div>
  )
}

export default RegisterPage