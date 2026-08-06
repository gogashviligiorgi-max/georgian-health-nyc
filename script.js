document.getElementById('lead-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  const btn = form.querySelector('button[type="submit"]');
  const originalBtnText = btn.textContent;

  const data = {
    firstName: form.firstName.value.trim(),
    lastName: form.lastName.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim()
  };

  btn.disabled = true;
  btn.textContent = 'იგზავნება...';
  status.textContent = '';
  status.className = 'form-status';

  try {
    const res = await fetch('https://primary-production-ec5ee.up.railway.app/webhook/ghs-website-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();

    if (result.success) {
      status.textContent = result.message;
      status.classList.add('success');
      form.reset();
    } else {
      status.textContent = (result.errors || ['დაფიქსირდა შეცდომა, სცადეთ ხელახლა.']).join(' ');
      status.classList.add('error');
    }
  } catch (err) {
    status.textContent = 'დაფიქსირდა შეცდომა კავშირში. სცადეთ მოგვიანებით, ან პირდაპირ დაგვირეკეთ.';
    status.classList.add('error');
  } finally {
    btn.disabled = false;
    btn.textContent = originalBtnText;
  }
});
