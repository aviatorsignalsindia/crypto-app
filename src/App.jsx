import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';


const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
}


export default function App() {
  return (   
     <Layout>
      <AppHeader />
    <Layout>
        <AppSider />
      <Layout.Content style={contentStyle}>Content</Layout.Content>
    </Layout>
  </Layout>
  )
}
