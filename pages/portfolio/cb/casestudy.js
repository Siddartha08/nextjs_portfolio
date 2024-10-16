import { useRouter } from 'next/router';
import { portfolioItems } from '@/data/portfolio';
import Image from 'next/image';
import withAuth from '@/components/withAuth';
import React from 'react';
import { Card, CardContent } from '@mui/material'
import Navbar from '../../../components/Navbar';

const arch_code = `
# These code snippets are illustrative examples.

# db_factory.py
class DBFactory:
    def create_connection(self, db_type, **kwargs):
        if db_type == 'oracle':
            return OracleConnection(**kwargs)
        elif db_type == 'sqlserver':
            return SQLServerConnection(**kwargs)
        elif db_type == 'snowflake':
            return SnowflakeConnection(**kwargs)
        else:
            raise ValueError(f"Unsupported database type: {db_type}")

# connections.py
from sqlalchemy import create_engine
import snowflake.connector

class OracleConnection:
    def __init__(self, **kwargs):
        self.engine = create_engine(kwargs['connection_string'])

class SQLServerConnection:
    def __init__(self, **kwargs):
        self.engine = create_engine(kwargs['connection_string'])

class SnowflakeConnection:
    def __init__(self, **kwargs):
        self.connection = snowflake.connector.connect(
            email=kwargs['email'],
            role=kwargs['role'],
            warehouse=kwargs['warehouse'],
            database=kwargs['database'],
            schema=kwargs['schema']
        )

# base_check.py
class DataQualityCheck:
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def run_check(self):
        raise NotImplementedError("Subclasses should implement this!")

  `.trim();

  const check_run_example = `# This code is an illustrative example.

  # check_runner.py
  class DataQualityEngine:
      def __init__(self, db_factory, config_table):
          self.db_factory = db_factory
          self.config_table = config_table  # This could be a database table or a configuration file
  
      def load_checks(self, check_ids):
          checks = []
          for check_id in check_ids:
              # Retrieve check configuration based on check_id
              check_config = self.config_table.get(check_id)
              if not check_config:
                  continue  # Skip if check_id is not found
  
              # Create database connection
              db_connection = self.db_factory.create_connection(
                  db_type=check_config['database_type'],
                  **check_config['connection_details']
              )
  
              # Instantiate the appropriate check subclass
              check_type = check_config['check_type']
              if check_type == 'ValidValuesCheck':
                  check = ValidValuesCheck(
                      db_connection,
                      table_name=check_config['table_name'],
                      column_name=check_config['column_name'],
                      valid_values=check_config['valid_values']
                  )
              elif check_type == 'RangeCheck':
                  check = RangeCheck(
                      db_connection,
                      table_name=check_config['table_name'],
                      column_name=check_config['column_name'],
                      min_value=check_config['min_value'],
                      max_value=check_config['max_value']
                  )
              elif check_type == 'PeriodOverPeriodCheck':
                  check = PeriodOverPeriodCheck(
                      db_connection,
                      table_name=check_config['table_name'],
                      value_field=check_config['value_field'],
                      period_field=check_config['period_field'],
                      threshold=check_config['threshold']
                  )
              else:
                  continue  # Unsupported check type
  
              checks.append(check)
          return checks
  
      def run_checks(self, check_ids):
          checks = self.load_checks(check_ids)
          failure_reports = []
          for check in checks:
              result = check.run_check()
              if result:
                  failure_reports.append(result)
          return failure_reports
  
  # main.py
  # Assume config_table is a dictionary representing our configuration table
  config_table = {
      101: {
          'check_type': 'ValidValuesCheck',
          'database_type': 'oracle',
          'connection_details': {'connection_string': '...'},
          'table_name': 'policy_table',
          'column_name': 'status',
          'valid_values': ['Active', 'Inactive', 'Pending']
      },
      102: {
          'check_type': 'RangeCheck',
          'database_type': 'sqlserver',
          'connection_details': {'connection_string': '...'},
          'table_name': 'client_table',
          'column_name': 'age',
          'min_value': 0,
          'max_value': 120
      },
      # Additional check configurations...
  }
  
  # Instantiate the data quality engine
  db_factory = DBFactory()
  dq_engine = DataQualityEngine(db_factory, config_table)
  
  # Specify the check IDs to run
  check_ids_to_run = [101, 102]  # Multiple checks can be submitted
  
  # Run the checks
  failure_reports = dq_engine.run_checks(check_ids_to_run)
  
  # Report the results
  if failure_reports:
      print("Data Quality Issues Found:")
      for report in failure_reports:
          print(report)
  else:
      print("All checks passed successfully.")
  `.trim();

  const syntaxColors = {
    comment: { color: '#6A9955' },  // Grey
    keyword: { color: '#0000FF' },  // Blue
    className: { color: '#795E26' }, // Purple
    string: { color: '#008000' },   // Green
    error: { color: '#FF0000' },    // Red
    fString: { color: '#008080' }   // teal
  };

  const highlightSyntax = (code) => {
    const lines = code.split('\n');
    return lines.map((line, index) => {
      const parts = [];
      let lastIndex = 0;

      const addPart = (end, style) => {
        if (end > lastIndex) {
          parts.push({
            text: line.slice(lastIndex, end),
            style
          });
          lastIndex = end;
        }
      };

      // Comments
      line.replace(/(#.*)$/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.comment);
      });

      // Keywords
      line.replace(/(class|def|if|elif|else|return|raise|for|in|while)\b/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.keyword);
      });

      // Class names
      line.replace(/(DBFactory|OracleConnection|SQLServerConnection|SnowflakeConnection)/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.className);
      });

      // Strings
      line.replace(/('.*?')/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.string);
      });

      // Exceptions
      line.replace(/(ValueError)/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.error);
      });

      // F-string brackets
      line.replace(/({[^}]*})/g, (match, p1, offset) => {
        addPart(offset, {});
        addPart(offset + match.length, syntaxColors.fString);
      });

      addPart(line.length, {});

      return (
        <React.Fragment key={index}>
          {parts.map((part, i) => (
            <span key={i} style={part.style}>{part.text}</span>
          ))}
          {index < lines.length - 1 && '\n'}
        </React.Fragment>
      );
    });
  };


const dataqualityPage = () => {
  const item = portfolioItems.find(item => item.id === 'dataquality')
  return (
    <div className="container mx-auto px-4 py-8 bg-white max-w-3xl">
      <Navbar 
  pageTitle="Corebridge Financial Case Study"  // Set the title for this page
  navItems={[
    { href: '/', text: 'Home' },
    { href: '#Resume', text: 'Resume' }
  ]} 
/>
<p className="mb-4">
       </p>
<p className="mb-4">
         </p>
    <h1 className="text-3xl font-bold mb-4">Data Quality Case Study: Ensuring Accurate Data for Actuarial Modeling</h1>
    <h6 ><strong>By: JP Emery Lead Engineer </strong></h6>
    <br></br>
    
    <p className="mb-4">

      In the actuarial field, data accuracy is important. Each time we run a model for even a subset of our business we will pay around $30,000 in compute cost. Its important that we get the data right before we hit run.  
      This case study outlines how we developed a cost-effective, Python-based data quality engine to validate data housed within Oracle, Snowflake, and SQL Server databases.
    </p>
    
    <p className="mb-4">
      <strong>Note:</strong> <em>Due to proprietary considerations, the code snippets provided in this case study are illustrative examples intended to demonstrate the concepts and techniques employed. They do not represent the actual code used in the project.</em>
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-2">Background</h2>
    <p className="mb-4">
      Our Actuarial Data Team is responsible for preparing data for model stakeholders. Data quality is not a new issue within large organizations there are many mature softwares around data quality, governance, and lineage, but
       due to budget constraints, we couldn't adopt new tools for data validation. Instead, we engineered a custom solution using Python, leveraging object-oriented principles to build an extensible and efficient data quality engine.
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-2">Objectives</h2>
    <ul className="list-disc pl-5 mb-4">
      <li>Validate data before model runs to avoid costly errors.</li>
      <li>Build a cost-effective solution without additional tooling.</li>
      <li>Implement checks for data consistency, completeness, and integrity.</li>
      <li>Optimize data processing to handle large datasets efficiently.</li>
      <li>Minimize data transfer costs by reducing the amount of data moved between servers.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6 mb-2">Methodology</h2>
    <p className="mb-4">
      <strong>Data Quality Checks:</strong> We implemented various types of data quality checks to ensure data integrity and reliability before model execution. The main types of checks included:
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li><strong>Valid Values:</strong>Check if a categorical field contains only predefined values or simply that the field is not null.</li>
      <li><strong>Range Checks:</strong> Make sure a numeric field falls within a certain range.</li>
      <li><strong>Trend checks :</strong> Detect significant changes in data over time that may indicate anomalies.</li>
    </ul>
    <p className="mb-4">
      <strong>Architectural Design:</strong> To build a flexible and scalable data quality engine, we employed object-oriented programming techniques.
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li><strong>Classes and Inheritance:</strong> We used Python classes to encapsulate data quality checks, allowing for easy extension and maintenance.</li>
      <li><strong>Factory Pattern:</strong> Implemented a factory structure to dynamically create different database connections based on the database type.</li>
      <li><strong>Database Abstraction:</strong> Passed the database connection factory to a base class, enabling the data quality engine to interact seamlessly with different databases.</li>
    </ul>
    
    <Card className="mb-4">
      <CardContent>
        <h3 className="text-xl font-bold mb-2">Code Snippet: Base Class and Factory Pattern for Database Connections</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
        {highlightSyntax(arch_code)}
        </pre>
      </CardContent>
    </Card>

    <p className="mb-4">
      We implemented various types of data quality checks to ensure data integrity and reliability before model execution. The main types of checks included Valid Values Checks for Completeness, Range Checks for Numerical Values, and Period-over-Period Checks for Fact Fields.
    </p>

    <Card className="mb-4">
      <CardContent>
        <h3 className="text-xl font-bold mb-2">Code Snippet: DataQualityEngine and check runs</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
        {highlightSyntax(check_run_example)}
        </pre>
      </CardContent>
    </Card>
    <h2 className="text-2xl font-bold mt-6 mb-2">Optimizing Data Processing</h2>
    <br></br>
    <h4>Minimizing Data Transfer</h4> 
    <p className="mb-4">
      To reduce data transfer costs and improve performance: 
    </p>
    <ul className="list-disc pl-5 mb-4">
      <li><strong>Selective Data Retrieval</strong> Designed queries to return results only when failures or anomalies are detected.</li>
      <li><strong>Server-side Computation:</strong> Performed computations and validations on the database server whenever possible to minimize data movement.</li>
    </ul>
    <h4>Batch Processing for Large Datasets</h4> 
    <p className="mb-4">
      for tables with millions of records    </p>
    <ul className="list-disc pl-5 mb-4">
      <li><strong>Chunking Data</strong> Designed queries to return results only when failures or anomalies are detected.</li>
      <li><strong>Server-side Computation:</strong> Performed computations and validations on the database server whenever possible to minimize data movement.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-6 mb-2">Results</h2>
    <p className="mb-4">
      Our Python-based data quality engine went from POC to first model coverage in 3 months. 
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-2">Challenges and Solutions</h2>
    <p className="mb-4">
      We faced budget constraints, multiple database connections, and evolving requirements, all of which we tackled through creative solutions such as in-house development, the use of a factory pattern, and the creation of a configuration-driven, extensible system.
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-2">Conclusion</h2>
    <p className="mb-4">
      By leveraging Python's object-oriented features and efficient data processing techniques, we built a robust, configuration-driven data quality engine that meets our actuarial modeling needs without incurring additional costs.
    </p>

    <h2 className="text-2xl font-bold mt-6 mb-2">Future Enhancements</h2>
    <ul className="list-disc pl-5 mb-4">
      <li>Integration with CI/CD Pipelines.</li>
      <li>Alerting Mechanisms for notifying stakeholders.</li>
      <li>Developing a dashboard for monitoring data quality metrics over time.</li>
    </ul>
  </div>
  );
};

// Wrap the page with the `withAuth` HOC to protect it
export default dataqualityPage;