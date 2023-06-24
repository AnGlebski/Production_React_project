import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
};

export const Loader = ({className}: LoaderProps) => {

  return (
    <div className={classNames('loadingio-eclipse', {}, [className])}>
      <div className="ldio-rpinwye8j0b">
        <div>
        </div>
      </div>
    </div>
  );
};