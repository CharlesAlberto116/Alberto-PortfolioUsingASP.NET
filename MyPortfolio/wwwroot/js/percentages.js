  <script>
        document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('.skill-fill').forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.width = width;
            }, 100);
          });
        });
    </script>