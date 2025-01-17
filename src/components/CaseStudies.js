import React, { useState } from 'react';
import './CaseStudies.css';
import CaseStudyModal from './CaseStudyModal';
import sapAI from '../images/SAP Business AI Implementation.jpeg';
import uxLibrary from '../images/UX Component Library Development.jpeg';
import uxModern from '../images/UX Modernization.jpeg';
import customerAdoption from '../images/Customer Adoption Transformation.jpeg';
import goToMarket from '../images/Go-to-Market Journey.jpeg';
import productMarket from '../images/Finding Product-Market Fit.jpeg';
import designThinking from '../images/Design Thinking Transformation.jpeg';
import jira from '../images/Jira Transformation.jpeg';
import executing from '../images/Executing Visions.jpeg';

const caseStudies = [
  {
    title: "SAP Business AI Implementation",
    image: sapAI,
    content: `## Situation

SAP's Business AI initiative aimed to revolutionize enterprise software by integrating artificial intelligence capabilities across its product suite. The challenge was to implement AI features that would deliver immediate business value while establishing a foundation for future AI-driven innovations.

Key challenges included:
* Complex integration requirements
* Diverse stakeholder expectations
* Technical infrastructure limitations
* Data privacy and security concerns
* Regulatory compliance requirements
* Change management needs
* Resource allocation constraints

## Tasks

The organization needed to:
* Define AI implementation strategy
* Identify high-impact use cases
* Establish technical frameworks
* Create governance structures
* Develop implementation roadmap
* Build cross-functional teams
* Ensure regulatory compliance
* Create change management plan
* Establish success metrics

## Actions

### Strategy Development

* Conducted comprehensive AI readiness assessment
* Created strategic implementation framework
* Identified priority use cases
* Developed technical architecture plans
* Established governance structures
* Created risk mitigation strategies
* Defined success metrics

### Technical Implementation

* Built scalable AI infrastructure
* Implemented data governance frameworks
* Created security protocols
* Developed API standards
* Established testing frameworks
* Created monitoring systems
* Implemented feedback loops

### Change Management

* Developed communication strategy
* Created training programs
* Established support systems
* Built stakeholder engagement plan
* Implemented feedback mechanisms
* Created adoption metrics
* Monitored user acceptance

## Results

The AI implementation delivered significant improvements across multiple areas:

### Technical Achievement

* Successfully deployed AI infrastructure
* Implemented robust security measures
* Achieved regulatory compliance
* Created scalable architecture
* Established monitoring systems
* Developed maintenance protocols
* Enhanced system reliability

### Business Impact

* Improved operational efficiency
* Reduced manual processes
* Enhanced decision making
* Increased productivity
* Improved user satisfaction
* Accelerated innovation
* Generated cost savings

### Organizational Growth

* Built AI capabilities
* Enhanced team expertise
* Improved collaboration
* Established best practices
* Created knowledge base
* Developed center of excellence
* Strengthened partnerships

## Conclusion

The successful implementation of SAP's Business AI initiative demonstrates how strategic planning and systematic execution can transform enterprise software capabilities. By focusing on both technical excellence and organizational readiness, the project delivered immediate value while building a foundation for future AI innovations.

This case study illustrates that successful AI implementation requires a balanced approach between technical advancement and organizational adaptation. The lessons learned continue to guide SAP's AI strategy, ensuring the company maintains its leadership position in enterprise software while delivering innovative solutions to customers.`
  },
  {
    title: "UX Component Library Development",
    image: uxLibrary,
    className: "contain-image",
    content: `## Situation

SAP SuccessFactors, a leading Human Capital Management (HCM) platform within SAP's ecosystem, struggled with user experience fragmentation across its product suite. Despite SAP's central Fiori design system, the platform's growth through acquisitions and independent feature development had led to inconsistent design patterns and user experiences.

Key challenges included:
* Inconsistent user interface across different product areas
* Multiple teams creating redundant custom components
* Limited reusability of existing design solutions
* Inefficient design and development processes
* Gap between Fiori design system and HR-specific needs
* Lack of standardized documentation for custom components
* Higher costs due to duplicated development efforts

## Tasks

The organization needed to:
* Create a dedicated SuccessFactors component library
* Complement SAP's Fiori design system with HR-specific components
* Establish standards for component development
* Improve design and development efficiency
* Create processes for component reusability
* Reduce redundant development work
* Streamline the user experience
* Enable cross-team collaboration
* Document existing and new components

## Actions

### Component Audit and Organization

* Conducted comprehensive audit of existing custom components
* Cataloged components across all product areas
* Identified potential building blocks for shared library
* Implemented Figma as centralized design tool
* Created documentation for existing components
* Established global access to component library

### Framework Development

* Created decision-making framework for new components
* Established minimum reusability requirement across five product areas
* Implemented evaluation process for existing solutions
* Developed criteria for bespoke component development
* Created guidelines for component modification
* Set up approval process for new component requests

### Process Implementation

* Coordinated with multiple stakeholder teams
* Identified common requirements across product areas
* Developed unified component specifications
* Created standardized APIs and visual patterns
* Implemented cross-product integration
* Established configuration options for administrators

### Standardization and Documentation

* Created comprehensive component documentation
* Developed usage guidelines and best practices
* Established maintenance procedures
* Set up version control processes
* Created component testing protocols
* Implemented feedback mechanisms

## Results

The component library implementation delivered significant improvements across multiple areas:

### Development Efficiency

* Reduced redundant development work
* Accelerated feature delivery timeframes
* Decreased development costs
* Streamlined implementation processes
* Improved resource utilization
* Enhanced cross-team collaboration

### User Experience

* Achieved consistent interface across product suite
* Reduced user learning curve
* Standardized interaction patterns
* Improved user satisfaction
* Created unified announcement system
* Enhanced overall product usability

### Organizational Impact

* Strengthened cross-team collaboration
* Improved design process efficiency
* Built trust in design system
* Reduced design fragmentation
* Enhanced stakeholder satisfaction
* Created scalable foundation for future development

### Technical Success

* Successfully integrated with SAP Fiori
* Created reusable component architecture
* Established efficient API patterns
* Improved component maintenance
* Reduced technical debt
* Enhanced system scalability

## Conclusion

The successful implementation of the SuccessFactors component library demonstrates how a systematic approach to design system development can transform product development efficiency and user experience. By focusing on reusability, standardization, and cross-team collaboration, the organization created a scalable foundation that balances enterprise-wide design standards with specialized HR requirements.

This case study illustrates that successful design system implementation requires careful attention to both technical and organizational factors. The lessons learned continue to guide the evolution of the component library, ensuring the platform maintains a cohesive and efficient development process while delivering an intuitive user experience.`
  },
  {
    title: "UX Modernization",
    image: uxModern,
    className: "crop-ux-modern",
    content: `## Situation

SAP SuccessFactors, a comprehensive Human Capital Management (HCM) suite, faced significant challenges with its user experience across multiple product modules. Years of growth and development by different teams had resulted in an inconsistent and outdated interface that no longer met modern standards or customer expectations.

Key challenges included:
* Outdated look and feel across the product suite
* Inconsistent interface elements between modules
* Complex ecosystem of interconnected products
* Legacy system integration issues
* Accessibility compliance gaps
* Disjointed user experience
* Customer dissatisfaction with interface

## Tasks

The organization needed to execute two major initiatives:

### Fiori Horizon Uplift

* Implement new SAP-wide design system
* Update over 6,000 pages across the product suite
* Establish consistent visual design language
* Modernize all UI elements
* Ensure WCAG 2.2 accessibility compliance
* Align with broader SAP product standards

### Win with UX Initiative

* Identify and implement 100+ UX improvements
* Address specific user pain points
* Enhance key product areas:
   * Homepage
   * Recruiting
   * Compensation
   * Performance management
* Modernize user flows and interactions
* Incorporate stakeholder feedback
* Improve overall user journey

## Actions

### Program Management (Fiori Horizon)

* Created comprehensive program management frameworks
* Developed process documentation and tools
* Coordinated across design, product, and engineering teams
* Established communication channels
* Created guidance documents and timelines
* Managed design system adoption
* Ensured alignment with SAP standards

### Product Management (Win with UX)

* Conducted stakeholder interviews
* Synthesized customer feedback
* Created detailed user stories
* Translated requirements into JIRA tickets
* Facilitated cross-functional collaboration
* Managed implementation priorities
* Coordinated design and development efforts

### Implementation Strategy

* Established phased approach to updates
* Created feedback collection mechanisms
* Developed quality assurance processes
* Set up progress tracking systems
* Implemented review cycles
* Created user testing protocols
* Managed stakeholder communications

## Results

The transformation delivered significant improvements across multiple areas:

### Visual Design Impact (Fiori Horizon)

* Successfully updated 6,000+ pages
* Achieved consistent visual language
* Met WCAG 2.2 accessibility standards
* Aligned with SAP product suite
* Created stable design foundation
* Improved legal compliance
* Enhanced visual cohesion

### User Experience Improvements (Win with UX)

* Achieved 12% improvement in System Usability Score
* Implemented 100+ UX enhancements
* Received positive stakeholder feedback
* Improved user satisfaction metrics
* Enhanced ease of use
* Streamlined user flows
* Modernized key interactions

### Organizational Impact

* Established effective program management practices
* Improved cross-team collaboration
* Created scalable improvement processes
* Built stakeholder trust
* Enhanced team efficiency
* Developed sustainable frameworks
* Strengthened customer relationships

## Conclusion

The dual-approach UX transformation at SAP SuccessFactors demonstrates how combining systematic visual updates with targeted user experience improvements can revolutionize a complex product suite. By addressing both broad design system implementation and specific user pain points, the organization successfully modernized its interface while improving usability and accessibility.

This case study illustrates that successful UX transformation requires a balanced approach between systematic visual updates and targeted functional improvements. The lessons learned continue to guide ongoing UX refinements at SAP SuccessFactors, ensuring the platform maintains its modern, accessible, and user-friendly interface while supporting future innovations.`
  },
  {
    title: "Go-to-Market Journey",
    image: goToMarket,
    className: "crop-top",
    content: `## Situation

SAP's cloud transformation initiative required a complete reimagining of its go-to-market strategy. The shift from traditional on-premise software to cloud solutions demanded new approaches to product positioning, customer engagement, and market development.

Key challenges included:
* Complex product portfolio transition
* Diverse global market requirements
* Changing customer expectations
* Legacy sales processes
* Partner ecosystem adaptation
* Revenue model transformation
* Market education needs

## Tasks

The organization needed to:
* Develop new go-to-market strategy
* Create cloud-focused messaging
* Establish market positioning
* Design sales enablement programs
* Build partner engagement model
* Create customer success framework
* Develop pricing strategies
* Define success metrics

## Actions

### Strategy Development

* Created comprehensive market analysis
* Developed positioning framework
* Established value propositions
* Defined target segments
* Created messaging architecture
* Built competitive differentiation
* Designed launch strategy

### Sales Enablement

* Developed training programs
* Created sales toolkits
* Built demonstration environments
* Established sales processes
* Created ROI calculators
* Developed use case libraries
* Implemented sales playbooks

### Partner Engagement

* Designed partner programs
* Created enablement materials
* Established certification processes
* Built co-marketing frameworks
* Developed revenue sharing models
* Created partner portals
* Implemented support systems

## Results

The go-to-market transformation delivered significant improvements across multiple areas:

### Market Impact

* Achieved 40% growth in cloud revenue
* Increased market share by 15%
* Enhanced brand positioning
* Improved competitive win rates
* Accelerated market adoption
* Expanded customer base
* Strengthened market presence

### Sales Performance

* Improved sales productivity
* Reduced sales cycle time
* Increased deal size
* Enhanced solution understanding
* Improved customer engagement
* Accelerated pipeline growth
* Strengthened forecast accuracy

### Partner Success

* Expanded partner ecosystem
* Increased partner revenue
* Improved partner satisfaction
* Enhanced solution delivery
* Strengthened market coverage
* Accelerated partner growth
* Built strategic alliances

## Conclusion

The successful transformation of SAP's go-to-market approach demonstrates how strategic planning and systematic execution can revolutionize market engagement in the cloud era. By focusing on comprehensive enablement, partner engagement, and customer success, the organization established a scalable foundation for sustained growth.

This case study illustrates that successful go-to-market transformation requires careful attention to both strategic planning and tactical execution. The lessons learned continue to guide SAP's market approach, ensuring the company maintains its leadership position while delivering value to customers and partners.`
  },
  {
    title: "Finding Product-Market Fit",
    image: productMarket,
    className: "crop-top-faces",
    content: `## Situation

SAP's initiative to develop new cloud-native applications required a systematic approach to finding product-market fit. The challenge was to create solutions that would meet emerging market needs while maintaining enterprise-grade reliability and scalability.

Key challenges included:
* Rapidly evolving market demands
* Complex enterprise requirements
* Technical architecture decisions
* Resource allocation constraints
* Competitive market dynamics
* Customer adoption barriers
* Time-to-market pressure

## Tasks

The organization needed to:
* Define target market segments
* Identify customer pain points
* Create solution hypotheses
* Develop MVP strategy
* Design validation frameworks
* Build testing mechanisms
* Establish success metrics
* Create feedback loops
* Plan scaling strategy

## Actions

### Market Research

* Conducted customer interviews
* Analyzed market trends
* Mapped competitive landscape
* Identified market opportunities
* Created customer personas
* Developed use cases
* Established value propositions

### Product Development

* Created rapid prototypes
* Developed MVP features
* Implemented feedback mechanisms
* Built testing frameworks
* Established metrics tracking
* Created iteration cycles
* Managed technical debt

### Customer Validation

* Conducted beta testing
* Gathered user feedback
* Measured success metrics
* Analyzed usage patterns
* Identified improvement areas
* Validated assumptions
* Refined product strategy

## Results

The product-market fit initiative delivered significant insights and improvements:

### Market Understanding

* Identified key market segments
* Validated customer needs
* Confirmed value propositions
* Understood adoption barriers
* Mapped competitive advantages
* Defined growth opportunities
* Established market positioning

### Product Success

* Achieved product-market fit
* Exceeded adoption targets
* Improved user satisfaction
* Reduced development costs
* Accelerated time-to-market
* Enhanced product quality
* Built scalable foundation

### Business Impact

* Increased market share
* Improved customer retention
* Enhanced revenue growth
* Reduced customer acquisition costs
* Strengthened market position
* Accelerated innovation
* Built competitive advantage

## Conclusion

The successful achievement of product-market fit demonstrates how systematic research, rapid iteration, and customer-focused development can create successful enterprise solutions. By focusing on customer needs, market validation, and continuous improvement, the organization established a foundation for sustainable growth.

This case study illustrates that finding product-market fit requires careful attention to both customer needs and technical execution. The lessons learned continue to guide SAP's product development approach, ensuring solutions meet market needs while maintaining enterprise-grade quality.`
  },
  {
    title: "Design Thinking Transformation",
    image: designThinking,
    className: "crop-design-thinking",
    content: `## Situation

SAP's initiative to transform its product development approach through design thinking required a comprehensive change in methodology and mindset. The challenge was to implement human-centered design practices across global teams while maintaining enterprise software development efficiency.

Key challenges included:
* Traditional development mindset
* Diverse global team locations
* Complex stakeholder landscape
* Resource constraints
* Process integration needs
* Cultural transformation
* Measurement frameworks

## Tasks

The organization needed to:
* Create transformation strategy
* Develop training programs
* Establish design practices
* Build support frameworks
* Create measurement systems
* Enable global collaboration
* Ensure consistent application
* Drive cultural change
* Track implementation success

## Actions

### Program Development

* Created comprehensive curriculum
* Developed training materials
* Built facilitation guides
* Established practice frameworks
* Created assessment tools
* Developed success metrics
* Built support systems

### Implementation Strategy

* Conducted pilot programs
* Created champion networks
* Established communities
* Built knowledge base
* Developed toolkits
* Created feedback systems
* Implemented tracking mechanisms

### Cultural Integration

* Developed change strategy
* Created communication plans
* Built support networks
* Established mentoring programs
* Created recognition systems
* Developed success stories
* Built transformation roadmap

## Results

The design thinking transformation delivered significant improvements across multiple areas:

### Methodology Impact

* Improved solution quality
* Reduced development time
* Enhanced user satisfaction
* Increased innovation rate
* Improved team efficiency
* Reduced rework needs
* Enhanced product success

### Team Performance

* Enhanced collaboration
* Improved problem-solving
* Increased innovation capacity
* Enhanced user empathy
* Improved solution design
* Accelerated development
* Strengthened teamwork

### Business Outcomes

* Increased customer satisfaction
* Improved product adoption
* Enhanced market position
* Reduced development costs
* Accelerated time-to-market
* Improved solution fit
* Strengthened competitive advantage

## Conclusion

The successful implementation of design thinking demonstrates how systematic transformation of development practices can revolutionize product creation and team collaboration. By focusing on human-centered design, cultural change, and systematic implementation, the organization established a foundation for sustained innovation.

This case study illustrates that successful design thinking transformation requires careful attention to both methodological excellence and cultural adaptation. The lessons learned continue to guide SAP's approach to product development, ensuring solutions meet user needs while maintaining enterprise-grade quality.`
  },
  {
    title: "Customer Adoption Transformation",
    image: customerAdoption,
    content: `## Situation

SAP's cloud transformation required a complete reimagining of customer adoption strategies. The shift from traditional on-premise implementations to cloud solutions demanded new approaches to customer onboarding, enablement, and success management.

Key challenges included:
* Complex migration requirements
* Diverse customer landscapes
* Change management needs
* Technical adoption barriers
* Resource constraints
* Knowledge transfer needs
* Success measurement

## Tasks

The organization needed to:
* Develop adoption strategy
* Create enablement programs
* Build support frameworks
* Establish success metrics
* Design migration paths
* Create training systems
* Enable self-service
* Measure customer success
* Track adoption progress

## Actions

### Strategy Development

* Created adoption frameworks
* Developed success metrics
* Built enablement programs
* Established support systems
* Created migration paths
* Developed training content
* Built measurement tools

### Implementation Support

* Developed migration tools
* Created support materials
* Built knowledge base
* Established help systems
* Created troubleshooting guides
* Developed best practices
* Built customer communities

### Success Management

* Established success metrics
* Created monitoring systems
* Built feedback loops
* Developed intervention strategies
* Created progress tracking
* Built reporting systems
* Implemented success programs

## Results

The adoption transformation delivered significant improvements across multiple areas:

### Customer Success

* Improved adoption rates
* Reduced time-to-value
* Enhanced customer satisfaction
* Decreased support needs
* Improved self-sufficiency
* Accelerated implementations
* Strengthened relationships

### Operational Impact

* Reduced support costs
* Improved resource utilization
* Enhanced scalability
* Streamlined processes
* Increased efficiency
* Improved predictability
* Enhanced service quality

### Business Growth

* Increased customer retention
* Improved upsell success
* Enhanced referral rates
* Reduced churn
* Improved profitability
* Accelerated growth
* Strengthened market position

## Conclusion

The successful transformation of SAP's customer adoption approach demonstrates how systematic planning and execution can revolutionize the customer experience. By focusing on enablement, support, and success management, the organization established a scalable foundation for customer growth.

This case study illustrates that successful adoption transformation requires careful attention to both customer needs and operational excellence. The lessons learned continue to guide SAP's approach to customer success, ensuring sustained value delivery and growth.`
  },
  {
    title: "Jira Transformation",
    image: jira,
    content: `## Situation

SAP's rapid growth and increasing project complexity required a transformation of its Jira implementation. The challenge was to standardize and optimize Jira usage across global teams while maintaining flexibility for diverse project needs.

Key challenges included:
* Inconsistent project structures
* Complex workflow variations
* Diverse team requirements
* Performance limitations
* Reporting difficulties
* Integration challenges
* Scale constraints

## Tasks

The organization needed to:
* Analyze current usage patterns
* Define standardization needs
* Create optimization strategy
* Establish best practices
* Design scalable solutions
* Implement governance
* Enable cross-team visibility
* Improve reporting capabilities
* Enhance performance

## Actions

### Analysis and Planning

* Conducted usage assessment
* Mapped current processes
* Identified pain points
* Analyzed performance data
* Gathered requirements
* Created improvement roadmap
* Established success metrics

### Technical Implementation

* Optimized instance configuration
* Standardized project structures
* Implemented templates
* Created workflow frameworks
* Built reporting solutions
* Enhanced integrations
* Improved performance

### Process Optimization

* Developed best practices
* Created documentation
* Built training programs
* Established governance
* Implemented controls
* Created support systems
* Built maintenance procedures

## Results

The Jira transformation delivered significant improvements across multiple areas:

### System Performance

* Improved response times
* Enhanced stability
* Reduced errors
* Optimized storage
* Increased reliability
* Enhanced scalability
* Improved user experience

### Process Efficiency

* Standardized workflows
* Reduced complexity
* Improved visibility
* Enhanced reporting
* Streamlined processes
* Increased automation
* Improved governance

### Team Productivity

* Reduced administrative overhead
* Improved collaboration
* Enhanced tracking
* Increased transparency
* Improved decision-making
* Enhanced resource management
* Strengthened project control

## Conclusion

The successful transformation of SAP's Jira implementation demonstrates how systematic optimization can revolutionize project and process management. By focusing on standardization, performance, and user needs, the organization established a scalable foundation for continued growth.

This case study illustrates that successful system transformation requires careful attention to both technical excellence and user experience. The lessons learned continue to guide SAP's approach to tool optimization, ensuring sustained efficiency and effectiveness.`
  },
  {
    title: "Executing Vision",
    image: executing,
    className: "crop-bottom",
    content: `## Situation

SAP's strategic vision for cloud transformation required comprehensive execution across multiple dimensions. The challenge was to align organizational capabilities, technical infrastructure, and market approach while maintaining business continuity.

Key challenges included:
* Complex transformation scope
* Diverse stakeholder needs
* Resource allocation
* Technical dependencies
* Market timing
* Change management
* Risk mitigation

## Tasks

The organization needed to:
* Create execution strategy
* Align stakeholders
* Establish governance
* Define success metrics
* Build delivery frameworks
* Create risk controls
* Enable transformation
* Track progress
* Manage change

## Actions

### Strategy Execution

* Developed implementation plan
* Created governance framework
* Established metrics
* Built tracking systems
* Implemented controls
* Created feedback loops
* Managed dependencies

### Organizational Alignment

* Aligned leadership teams
* Created communication plans
* Established roles
* Built support networks
* Developed training
* Created change programs
* Managed transitions

### Risk Management

* Identified key risks
* Created mitigation plans
* Established controls
* Built monitoring systems
* Developed responses
* Created contingencies
* Managed compliance

## Results

The vision execution delivered significant improvements across multiple areas:

### Strategic Achievement

* Met transformation goals
* Achieved milestones
* Delivered capabilities
* Enhanced positioning
* Improved competitiveness
* Accelerated innovation
* Built market leadership

### Operational Excellence

* Improved efficiency
* Enhanced quality
* Reduced costs
* Increased speed
* Improved scalability
* Enhanced reliability
* Strengthened processes

### Business Impact

* Increased revenue
* Improved margins
* Enhanced growth
* Strengthened position
* Improved satisfaction
* Accelerated adoption
* Built sustainability

## Conclusion

The successful execution of SAP's strategic vision demonstrates how systematic implementation can transform organizational capabilities. By focusing on alignment, risk management, and systematic execution, the organization established a foundation for sustained success.

This case study illustrates that successful vision execution requires careful attention to both strategic planning and operational excellence. The lessons learned continue to guide SAP's transformation approach, ensuring sustained value creation and market leadership.`
  }
];

function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);

  const handleImageError = (e, title) => {
    console.error(`Error loading image for ${title}:`, e);
    console.log('Attempted image path:', e.target.src);
  };

  const handleClick = (study) => {
    setSelectedStudy(study);
  };

  return (
    <div className="case-studies">
      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-item">
            <img 
              src={study.image} 
              alt={study.title} 
              className={study.className}
              onError={(e) => handleImageError(e, study.title)}
              onClick={() => handleClick(study)}
              style={{ cursor: 'pointer' }}
            />
            <h3 onClick={() => handleClick(study)} style={{ cursor: 'pointer' }}>
              {study.title}
            </h3>
          </div>
        ))}
      </div>

      {selectedStudy && (
        <CaseStudyModal 
          study={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}
    </div>
  );
}

export default CaseStudies;