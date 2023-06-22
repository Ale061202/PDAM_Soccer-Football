import UIKit

class ProfileViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!
    @IBOutlet weak var emailLabel: UILabel!
    @IBOutlet weak var usernameLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        if let user = Defaults.getUser() {
            usernameLabel.text = user.username
            emailLabel.text = user.email
            
            if let avatarURLString = user.avatar,
               let avatarURL = URL(string: avatarURLString) {
                DispatchQueue.global().async {
                    if let imageData = try? Data(contentsOf: avatarURL),
                       let avatarImage = UIImage(data: imageData) {
                        DispatchQueue.main.async {
                            self.imageView.image = avatarImage
                        }
                    }
                }
            }
        }
    }

    @IBAction func editPassword(_ sender: Any) {
        performSegue(withIdentifier: "ChangePasswordSegue", sender: nil)

    }
    
    @IBAction func logOut(_ sender: Any) {
        Defaults.removeAll()
        
        let loginViewController = UIStoryboard(name: "Login", bundle: nil).instantiateViewController(withIdentifier: "LoginViewController")
        self.navigationController?.setViewControllers([loginViewController], animated: true)
    }
}
