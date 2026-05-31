const profile = {
  name: "Phạm Mạnh Quân",
  role: "Backend Developer",
  headline:
    "Backend Developer tập trung vào Node.js, database và xây dựng API cho các sản phẩm có tính ứng dụng thực tế.",
  summary:
    "Tôi đang tìm môi trường ổn định để phát triển chuyên môn backend, đặc biệt với Node.js, database và API, đồng thời đóng góp vào những sản phẩm có giá trị sử dụng cao.",
  cvUrl: "https://www.topcv.vn/xem-cv/AQAEV1FVBgNRVFNRCFFWVgRUAlxTAVYEDwdWBA1ded",
  githubUrl: "https://github.com/quanmp2811",
  contacts: [
    { label: "Email", value: "phamquan28112004@gmail.com" },
    { label: "Điện thoại", value: "0862528119" },
    { label: "Địa chỉ", value: "Hoàng Mai, Hà Nội" },
  ],
  skills: [
    "Node.js",
    "Express.js",
    "NestJS",
    "FastAPI",
    "Python",
    "MySQL",
    "MongoDB",
    "RESTful API",
    "JWT",
    "Docker",
    "GitHub",
  ],
  projects: [
    {
      title: "Website quản lý chấm công",
      description:
        "Xây dựng hệ thống quản lý thời gian làm việc, xử lý đăng nhập, xác thực người dùng, tích hợp Google OAuth và triển khai trên Render.",
      githubUrl: "https://github.com/quanmp2811/chamcong",
      demoUrl: "https://chamcongjdd.io.vn",
    },
    {
      title: "Chatbot tìm kiếm dữ liệu nội bộ",
      description:
        "Phát triển hệ thống AI hỗ trợ tìm kiếm tài liệu doanh nghiệp bằng FastAPI, RAG, Google Drive API và local AI.",
      githubUrl: "https://github.com/quanmp2811/chatbot",
      demoUrl: "",
    },
    {
      title: "Website bán đồ decor",
      description:
        "Xây dựng ứng dụng web thương mại điện tử cơ bản với Node.js, Express, MongoDB, EJS và phân quyền Admin/User.",
      githubUrl: "https://github.com/quanmp2811/web-ban-do-decor",
      demoUrl: "",
    },
  ],
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function renderContacts() {
  const container = document.getElementById("contactInfo");
  container.innerHTML = profile.contacts
    .map(
      (item) => `
        <div class="meta-item">
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </div>
      `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills");
  container.innerHTML = profile.skills
    .map((skill) => `<span class="tag">${skill}</span>`)
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects");
  container.innerHTML = profile.projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo</a>` : ""}
          </div>
        </article>
      `
    )
    .join("");
}

function initializeProfile() {
  setText("name", profile.name);
  setText("role", profile.role);
  setText("headline", profile.headline);
  setText("summary", profile.summary);

  const cvLink = document.getElementById("cvLink");
  const githubLink = document.getElementById("githubLink");

  cvLink.href = profile.cvUrl;
  githubLink.href = profile.githubUrl;

  renderContacts();
  renderSkills();
  renderProjects();
}

initializeProfile();
