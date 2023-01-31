const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://devsecopstutorials.com/',
  title: 'Cloud Native Security.',
}
// a function to turn a list of strings into a title case list of strings
// the words are all capitalised
const titleCase = (list) => list.map((word) => word.split(' ').map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '))
const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Getting started with Kubernetes and DevSecOps',
  description:
      'This page provides an overview of Kubernetes & DevSecOps tutorials that are listed on the cloud native security GitHub repository. Please contribute and propose changes, we would love to see your imput.',
  contact: 'https://devops.anaisurl.com/contact',
  social: {
    twitter: 'https://twitter.com/urlichsanais',
    github: 'https://github.com/cloud-native-security',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kubernetes beginner',
    description:
        'Get started with Kubernetes.',
    stack: titleCase(['Kubernetes', 'beginner', 'cloud native', 'Helm']),
    sourceCode: 'https://github.com/Cloud-Native-Security/kubernetes-starter',
    // livePreview: 'https://github.com/Cloud-Native-Security/kubernetes-starter',
  },
  {
    name: 'cloud native security',
    description:
        'Get started with cloud native security.',
    stack: titleCase(['Security', 'cloud native', 'Kubernetes']),
    sourceCode: 'https://github.com/Cloud-Native-Security/cloud-native-security-starter',
    // livePreview: 'https://github.com/Cloud-Native-Security/cloud-native-security-starter',
  },
  {
    name: 'Security Scanning',
    description:
        'Demo to get started with security scanning, specifically Trivy -- the cloud native, open source security scanner.',
    stack: titleCase(['ebpf', 'Security']),
    sourceCode: 'https://github.com/Cloud-Native-Security/trivy-demo',
    // livePreview: 'https://github.com/Cloud-Native-Security/trivy-demo',
  },
  {
    name: 'awesome-ebpf',
    description:
        'A collection of ebpf resources.',
    stack: titleCase(['ebpf', 'Security']),
    sourceCode: 'https://github.com/Cloud-Native-Security/awesome-ebpf',
    // livePreview: 'https://github.com/Cloud-Native-Security/awesome-ebpf',
  },
  {
    name: 'trivy-demo',
    description:
        'Get started wth the all-in-one security scanner Trivy',
    stack: titleCase(['Trivy', 'Security', 'Scanning']),
    sourceCode: 'https://github.com/Cloud-Native-Security/trivy-demo',
    // livePreview: 'https://github.com/Cloud-Native-Security/trivy-demo',
  },
]

const skills = [...new Set(projects.map((project) => project.stack).flat())]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}




export { header, about, projects, skills, contact }

