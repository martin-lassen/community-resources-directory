# community-resources-directory
This application is a sample created for housing connector.  It is a community resource directory built in next.js

# Housing Connector - Community Resources Directory Assessment

## Overview

Welcome to the Housing Connector technical assessment! You'll be building a community resources directory that helps case managers find local services for their clients. This reflects the real-world challenges our engineering team faces when building tools for housing and social service providers.

## The Challenge

**Scenario:** You're building a web application for nonprofit staff who need to quickly find and filter community resources like food banks, shelters, health clinics, and legal services for the people they serve.

**Your Task:** Create a responsive, user-friendly interface that allows case managers to efficiently search and filter through community resources based on location, category, and other criteria.

## Dataset

The `resources.json` file contains **300 fictional community resources** across Seattle with the following structure:

```json
{
  "id": 1,
  "name": "Downtown Case management",
  "category": "shelter",
  "address": "4112 Pine St, Seattle, WA 98118",
  "coordinates": {"lat": 47.6768, "lng": -122.2647},
  "description": "Shelter service located in the Downtown neighborhood of Seattle.",
  "phone": "(206) 758-2424",
  "email": "info@example.org",
  "website": "www.example.org",
  "hours": "Tue & Thu: 10AM-4PM",
  "eligibility": "Veterans",
  "services": ["Emergency housing", "Family housing", "Case management"],
  "rating": 3.4,
  "capacity": 268,
  "languages_supported": ["Somali", "English"]
}
```

**Note:** The dataset includes some realistic edge cases (missing fields, null values, etc.) to test error handling and defensive programming.

### Categories Available
- `food` - Food banks, meal programs, grocery distribution
- `shelter` - Emergency housing, transitional housing, case management
- `health` - Medical clinics, behavioral health, primary care
- `legal` - Legal advice, court representation, document preparation
- `mental health` - Counseling, crisis intervention, support groups
- `employment` - Job training, career counseling, interview preparation
- `education` - GED prep, language classes, computer skills
- `case management` - Assessment, referral services, individual planning

## Requirements

### Core Features (Required)
1. **Display Resources** - Show a list/grid of community resources
2. **Category Filtering** - Filter by resource category
3. **Location-Based Features** - Either:
   - Calculate distance from user's location (using browser geolocation or mock coordinates)
   - OR filter by neighborhood/area
4. **Search Functionality** - Text search across resource names, descriptions, or services
5. **Responsive Design** - Works well on desktop and mobile devices
6. **Error Handling** - Gracefully handle missing or invalid data

### Technical Requirements
- **Frontend Framework**: JS or TS + React preferred (or vanilla HTML/JS/CSS)
- **No Backend Required**: Use the static JSON data provided
- **Free Tools Only**: Don't use any paid APIs or services
- **Modern JavaScript**: Use ES6+ features appropriately
- **Clean Code**: Well-organized, readable, and maintainable

### Scalability Considerations
Your solution should demonstrate how it might handle:
- 10x more resources (3,000+ items)
- Additional filter criteria and categories
- New data fields and resource types
- Integration with external APIs

### Suggested Enhancements (Optional)
- Pagination or infinite scroll for performance
- Multiple filter combinations (category + language + eligibility)
- Sorting (by distance, rating, alphabetical)
- Detailed view/modal for individual resources
- Map integration (using free services like Leaflet + OpenStreetMap)
- Save/bookmark favorite resources
- Accessibility features (ARIA labels, keyboard navigation)

## Getting Started

1. **Download the data**: Use the `resources.json` file in this repository
2. **Set up your project**: Create a new React app or HTML/JS project
3. **Load the data**: Fetch from the JSON file or import it directly
4. **Start building**: Begin with basic display and filtering

### Data Loading Example
```javascript
// Option 1: Fetch from file
const response = await fetch('./resources.json');
const data = await response.json();

// Option 2: Import directly (if using a bundler)
import resourcesData from './resources.json';
```

## Time Expectation

This assessment is designed to take **4-8 hours** of focused work. Please don't spend more than 8 hours total. We'd rather see a well-implemented subset of features than a rushed implementation of everything.

## What We're Looking For

### Code Quality
- Clean, readable code with logical organization
- Appropriate use of React patterns (if using React)
- Good separation of concerns
- Robust error handling for edge cases
- Performance considerations for large datasets

### Design & User Experience
- Thoughtful interface design that prioritizes usability
- Good visual hierarchy and information architecture
- Attention to spacing, typography, and visual polish
- Creative solutions to complex filtering/search interfaces
- Mobile-responsive design considerations
- Intuitive workflows for case manager users

### Architectural Thinking & Extensibility
- Code structure that can accommodate growth (more data, new filter types, additional categories)
- Component architecture that supports easy feature additions
- Thoughtful data modeling and state management patterns
- Consideration of future integration needs (APIs, real-time updates, etc.)
- Performance strategies for scaling

### Problem-Solving Approach
- How you handle the scope within time constraints
- Trade-offs and decisions you make
- Code organization and architecture choices
- Documentation of assumptions and reasoning

## Submission

Please provide:

1. **Code Repository** - PRIVATE GitHub repo (preferred) or zip file with your complete code
2. **README Documentation** - Include:
   - Setup/installation instructions
   - How to run your application
   - Key architectural decisions and trade-offs
   - What you would add/improve with more time
   - Any assumptions you made
3. **Live Demo** (Optional) - Deploy to Netlify, Vercel, or GitHub Pages if possible

### Repository Sharing
In your private GitHub repository, please invite the following users as collaborators:
- [@\[your-github-username\]](https://github.com/dougminkler)
- [@\[rafi-github-username\]](https://github.com/RowiDont)


## Questions?

If you have any questions about the requirements or need clarification, please don't hesitate to reach out. We want you to be successful!

## Notes

- **Data is fictional** - All organizations, addresses, and contact information are generated for this assessment
- **Balance functionality with thoughtful design** - We value clean, intuitive interfaces that demonstrate good UX principles and attention to visual details
- **Document your decisions** - We're interested in your thought process and trade-offs
- **Use your best judgment** - If something is unclear, make a reasonable assumption and document it

Good luck! We're excited to see how you approach this challenge.
README.md
Displaying README.md. 
