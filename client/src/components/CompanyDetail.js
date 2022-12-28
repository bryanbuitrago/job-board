import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompany } from '../graphql/queries';


function CompanyDetail() {
  const [company, setCompany] = useState(null)
  console.log(useParams())
  const { companyId } = useParams();

  useEffect(() => {  
    getCompany(companyId).then(setCompany)
  }, [companyId])

  console.log('[CompanyDetail] company:', company)
  if(!company){
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}

export default CompanyDetail;
