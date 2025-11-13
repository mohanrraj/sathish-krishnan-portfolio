// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Add active class to current section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
  
  // Add shadow to navbar on scroll
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('scrolled');
  }
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Typing Effect for Hero Text
const typedTextSpan = document.querySelector('.typing-text');
const textArray = ["Senior Sales Manager", "Real Estate Marketing Professional", "Property Consultant", "Real Estate Advisor"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 1100);
  }
}

// Project Modal Functionality
const modal = document.getElementById('projectModal');

// Project data with title, location, and description for each project
const projects = {
    'project1': {
        title: 'MM Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/02_logo09a.jpg',
        layout: 'projects/layouts/03_mm_nagar_layout_plan.jpg',
        site:'projects/sites/mmnagar.jpeg',
        description: 'MM NAGAR offers a gated community with tar roads, parks, a temple, and round-the-clock security in a pollution-free environment. It features walkways, public utility areas, stormwater drains, and streetlights for comfortable living. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it ensures convenience and accessibility.'
    },
    'project2': {
        title: 'Collector Farms',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/05_logo05a.jpg',
        layout: 'projects/layouts/06_collector_farms_layout_plan.jpg',
        site:'projects/sites/collector.jpeg',
        description: 'Collector Farms offers spacious plots starting from 5010 sq. ft. with 24×7 transport, water, and electricity facilities. It provides a pollution-free environment with lush green plantations and 24 ft wide tar roads. With clear documentation, it’s ideal for organic agriculture and farmland development.'
    },
    'project3': {
        title: 'VSR Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/08_logo08a.jpg',
        layout: 'projects/layouts/09_Vsr_nagar_layout_plan.jpg',
        site:'projects/sites/vsr.jpeg',
        description: 'VSR NAGAR offers a gated community with black tar roads, parks, a temple, and 24/7 security in a pollution-free environment. It features rainwater harvesting, CCTV surveillance, and 24×7 transport facilities in an established residential area. With children’s play areas, parking, and 90% bank loan availability, it ensures a secure and comfortable lifestyle.'
    },
    
    'project4': {
        title: 'Thirumalai Nagar',
        location: 'Walajabad Town, Tamil Nadu',
        poster: 'projects/posters/11_logo12a.jpg',
        layout: 'projects/layouts/12_Thirumalai_Nagar_Layout.jpg',
        site:'projects/sites/Thirumalai.jpg',
        description: 'THIRUMALAI NAGAR offers a gated community with on road property, cement roads, parks, a temple, and 24/7 security. It features walkways, public utility areas, stormwater drains, and streetlights for a well-developed layout. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it ensures modern and convenient living.'
    },
    'project5': {
        title: 'Railway Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/14_logo02a.jpg',
        layout: 'projects/layouts/15_railway_nagar_layout_plan.jpg',
        site:'projects/sites/railway.JPG',
        description: 'RAILWAY NAGAR offers a secure gated community with tar roads, parks, a temple, and 24/7 security. It includes walkways, public utility areas, stormwater drains, and streetlights for a well-planned layout. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it ensures convenient living.'
    },
    'project6': {
        title: 'Sri Ranganathar Avenue',
        location: 'Palur, Tamil Nadu',
        poster: 'projects/posters/17_logo010a.jpg',
        layout: 'projects/layouts/18_sri_ranganathar_avenue_layout_plan.jpg',
        site:'projects/sites/ranganathar.jpg',
        description: 'SRI RANGANATHAR AVENUE offers a gated community with cement roads, parks, a temple, and 24/7 security. It features walkways, public utility areas, stormwater drains, and streetlights for a well-developed layout. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it ensures modern and convenient living.'
    },
    'project7': {
        title: 'Satellite City',
        location: 'Anupuram, Tamil Nadu',
        poster: 'projects/posters/20_logo03a.jpg',
        layout: 'projects/layouts/21_satellite_city_layout_plan.jpg',
        site:'projects/sites/satellite.jpg',
        description: 'SATELLITE CITY offers a gated community with parks, walkways, streetlights, and 24/7 security. It features commercial shops, children’s play areas, and ample parking with cemented roads and stormwater drains. Water, bank loan facilities, and on-road access make it a fully equipped and convenient residential layout.'
    },
    'project8': {
        title: 'Siddhar Nagar',
        location: 'Salem, Tamil Nadu',
        poster: 'projects/posters/23_logo07a.jpg',
        layout: 'projects/layouts/24_siddharth_nagar_layout_plan.jpg',
        site:'projects/sites/siddharth.jpg',
        description: 'Siddhar Nagar offers a secure gated community with tar roads, parks, a temple, and 24/7 surveillance. It includes drainage systems, water connections for each plot, and fenced boundaries for added safety. With CCTV, children’s play areas, parking, and 80% bank loan availability, it ensures modern and comfortable living.'
    },
    'project9': {
        title: 'Sri Sakthi Vinayagar Nagar',
        location: 'Tellar, Vandavasi, Tamil Nadu',
        poster: 'projects/posters/26_logo06a.jpg',
        layout: 'projects/layouts/27_sri_sakthi_vinayagar_nagar_layout_plan.jpg',
        site:'projects/sites/sakthi.jpeg',
        description: 'Sri Sakthi Vinayagar Nagar (Golden Heaven) offers a gated community with cement roads, parks, a temple, and 24/7 security in a pollution-free environment. It provides 24×7 transport access and is located in an established residential area. With reliable water supply and 80% bank loan availability, it ensures comfortable and convenient living.'
    },
    'project10': {
        title: 'Sri Sai Padmavati Nagar',
        location: 'Chengalpattu, Tamil Nadu',
        poster: 'projects/posters/29_logo04a.jpg',
        layout: 'projects/layouts/30_sri_sai_padmavati_nagar_layout_plan.jpg',
        site:'projects/sites/padmavati.jpeg',
        description: 'Sri Sai Padmavati Nagar offers a safe gated community with tar roads, parks, a temple, and 24/7 security in a pollution-free environment. It includes walkways, stormwater drains, and 24×7 transport access for convenient living. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it ensures comfort and accessibility.'
    },
    'project11': {
        title: 'Kanchi Kanda Kottam',
        location: 'Kanchipuram, Tamil Nadu',
        poster: 'projects/posters/32_logo01a.jpg',
        layout: 'projects/layouts/33_kanchi_kanda_kottam_layout_plan.jpg',
        site:'projects/sites/kanchi.jpg',
        description: 'KANCHI KANDA KOTTAM offers a gated community with cement roads, a park, a temple, and 24/7 security.  It includes walkways, public utility areas, stormwater drains, and streetlights for a well-planned environment. With commercial shops, children’s play areas, parking, and 90% bank loan availability, it provides comfort and convenience.'
    },
    
    
    
    
    
    
    
    
    
    // Add more projects as needed
};

// Get modal elements
const modalPoster = document.getElementById('modalPoster');
const modalLayout = document.getElementById('modalLayout');
const modalSite = document.getElementById('modalSite');
const projectDescription = document.getElementById('projectDescription');
const projectTitle = document.getElementById('projectTitle');
const projectLocation = document.getElementById('projectLocation');
const closeBtn = document.querySelector('.close-btn');

// Function to open modal with project details
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    // Set the modal content
    modalPoster.src = project.poster;
    modalLayout.src = project.layout;
    modalSite.src = project.site;
    projectDescription.textContent = project.description;
    projectTitle.textContent = project.title;
    projectLocation.textContent = project.location;
    
    // Update WhatsApp button with project details
    const whatsappBtn = document.getElementById('whatsappBtn');
    const phoneNumber = '919367936748'; // Replace with your WhatsApp number (without + or spaces)
    const message = `Hi, I'm interested in ${project.title}. I would like to know more details about this project.`; 
    whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Show the modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Force reflow to ensure the transition works
    void modal.offsetHeight;
    
    // Add show class to trigger the animation
    modal.classList.add('show');
    
    // Add a history state when opening the modal
    history.pushState({ modalOpen: true, projectId: projectId }, '', '#' + projectId);
    // Add another history state to ensure back button goes to home
    history.pushState({ modalOpen: false }, '', window.location.pathname);
    
    // Focus the modal for better accessibility
    modal.setAttribute('aria-hidden', 'false');
}

// Function to close modal
function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        // Reset body scroll
        document.body.style.overflow = '';
        
        // Only modify history if we're currently showing a modal
        if (window.history.state && window.history.state.modalOpen) {
            // Go back in history to remove the modal state
            history.back();
        }
    }, 300);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeModal);

    // Add click handlers to all View Project buttons
    document.querySelectorAll('.btn-gradient').forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = 'project' + (index + 1);
            openProjectModal(projectId);
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

        // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Handle browser back button
    window.addEventListener('popstate', (e) => {
        // If the modal is open and we're going back from a modal state
        if (modal.style.display === 'block') {
            closeModal();
            // If we're not going to another modal state, scroll to top
            if (!e.state || !e.state.modalOpen) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        // If we're going to a modal state
        else if (e.state && e.state.modalOpen) {
            openProjectModal(e.state.projectId);
        }
    });

    // Image click to view in full screen
    modalPoster.addEventListener('click', () => {
        window.open(modalPoster.src, '_blank');
    });

    modalLayout.addEventListener('click', () => {
        window.open(modalLayout.src, '_blank');
    });

    modalSite.addEventListener('click', () => {
        window.open(modalSite.src, '_blank');
    });
});

// Add click event listeners to project items
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.portfolio-item');
    
    projectItems.forEach((item, index) => {
        // Add data attribute to identify project
        item.setAttribute('data-project-id', `project${index + 1}`);
        
        // Add click event to open modal
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });
});

// Start the typing effect when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Add fade-up animation on scroll
const items = document.querySelectorAll('.portfolio-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(40px)';
  item.style.transition = 'all 0.8s ease';
  observer.observe(item);
});